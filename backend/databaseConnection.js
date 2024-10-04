import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const databaseConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

databaseConnection.connect((err) => {
  if (err) {
    console.log("Kesalahan koneksi ke database MySql", err);
    return;
  }
  console.log("Terkoneksi ke Database MySql");
});

export default databaseConnection;
