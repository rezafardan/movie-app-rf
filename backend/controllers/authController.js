import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import databaseConnection from "../databaseConnection.js";

// Registration
const Register = async (req, res) => {
  const { fullname, username, password, email } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const query =
      "INSERT INTO user (fullname, username, password, email) VALUES (?, ?, ?, ?)";
    const values = [fullname, username, hashedPassword, email];

    databaseConnection.query(query, values, (err) => {
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
};

// Login
const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM user WHERE email = ?";
    databaseConnection.query(query, [email], async (err, results) => {
      if (err) {
        console.error("Database error", err);
        return res.status(500).json({ message: "Database error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      });
    });
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default { Register, Login };
