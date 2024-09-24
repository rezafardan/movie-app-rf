import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import databaseConnection from "./databaseConnection.js";
import tokenVerify from "./middleware/tokenVerify.js";

const app = express();
const port = 7001;

dotenv.config({ path: "../../.env" });

app.use(cors());
app.use(express.json());

// Endpoint register
app.post("/register", async (req, res) => {
  const { fullname, username, password, email } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query =
      "INSERT INTO user (fullname, username, password, email) VALUES (?, ?, ?, ?)";
    const values = [fullname, username, hashedPassword, email];

    databaseConnection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting user into database");
        return res.status(500).json({ message: "Database error" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Error hashing password", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Endpoint Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM user WHERE email = ?";
    databaseConnection.query(query, [email], async (err, result) => {
      if (err) {
        console.error("Error checking user in database", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length === 0) {
        return res
          .status(404)
          .json({ message: "Email or password is incorrect" });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Email or password is incorrect" });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Login successful", token, user });
    });
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Endpoint CRUD
app.get("/movies", tokenVerify, (req, res) => {
  const query = "SELECT * FROM film;";

  databaseConnection.query(query, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error eksekusi query" });
      return;
    }
    res.json(result);
  });
});

app.get("/movie/:id", tokenVerify, (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM film WHERE id = ?";
  databaseConnection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error fetching data" });
      return;
    }
    res.json(result[0]);
  });
});

app.post("/movie", tokenVerify, (req, res) => {
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query =
    "INSERT INTO film (title, years, extract, thumbnail) VALUES (?, ?, ?, ?)";
  databaseConnection.query(
    query,
    [title, years, extract, thumbnail],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "Error inserting data" });
      }
      res
        .status(201)
        .json({ id: result.insertId, title, years, extract, thumbnail });
    }
  );
});

app.put("/movie/:id", tokenVerify, (req, res) => {
  const { id } = req.params;
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query =
    "UPDATE film SET title = ?, years = ?, extract = ?, thumbnail = ? WHERE id = ?";

  databaseConnection.query(
    query,
    [title, years, extract, thumbnail, id],
    (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ error: "Error updating data" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Movie not found" });
      }

      res.json({ message: "Movie updated successfully" });
    }
  );
});

app.delete("/movie/:id", tokenVerify, (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM film WHERE id = ?";
  databaseConnection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error deleting item" });
    }
    res.status(204).send({ message: "Deleting item success" });
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
