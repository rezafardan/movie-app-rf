import mysql from "mysql2";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

/*
 ** menggunakan Node JS (Install node.js)
 ** menggunakan MySql (Install MySql)
 ** setelah menginstall semua, lanjutkan dengan `npm run dev' dan
 ** cd /backend ~> `node databaseConnection.js` di terminal / command prompt untuk memulai koneksi ke database MySql
 ** untuk create database bisa login ke MySql dan copy paste kan seluruh code yang ada di di schema.sql
 ** jangan lupa untuk buat file .env bila tidak ada
 */

// .env file
// API_URL=http://localhost:7001 ( atau htttp://127.0.0.1:7001 ) | port yang tidak sedang digunakan di PID masing-masing OS
// DB_HOST=localhost ( atau 127.0.0.1 )
// DB_USER=root
// DB_PASSWORD="............" (Local password)
// DB_DATABASE=movie_app

dotenv.config({ path: "../.env" });

const app = express();
const port = 7001;

// Midleware
app.use(cors());
app.use(express.json());

// Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.log("Error Connecting to MySql Database", err);
    return;
  }
  console.log("MySql Database Connected");
});

// CRUD ORM
app.get("/movies", (req, res) => {
  const query = "SELECT * FROM film;";

  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error eksekusi query" });
      return;
    }
    res.json(result);
  });
});

app.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM film WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error fetching data" });
      return;
    }
    res.json(result[0]);
  });
});

app.post("/movie", (req, res) => {
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query =
    "INSERT INTO film (title, years, extract, thumbnail) VALUES (?, ?, ?, ?)";
  connection.query(query, [title, years, extract, thumbnail], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Error inserting data" });
    }
    res
      .status(201)
      .json({ id: result.insertId, title, years, extract, thumbnail });
  });
});

app.put("/movie/:id", (req, res) => {
  const { id } = req.params;
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query =
    "UPDATE film SET title = ?, years = ?, extract = ?, thumbnail = ? WHERE id = ?";

  connection.query(
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

app.delete("/movie/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM film WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error deleting item" });
    }
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
