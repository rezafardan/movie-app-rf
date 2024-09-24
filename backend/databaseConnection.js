import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

/*
 ** menggunakan Node JS (Install node.js)
 ** menggunakan MySql (Install MySql)
 ** setelah menginstall semua, lanjutkan dengan `npm run dev' dan
 ** cd /backend ~> `node databaseConnection.js` di terminal / command prompt untuk memulai koneksi ke database MySql
 ** untuk create database bisa login ke MySql dan copy paste kan seluruh code yang ada di di schema.sql
 ** jangan lupa untuk buat file .env bila tidak ada
 */

// .env file
// VITE_API_URL=http://localhost:7001 ( atau htttp://127.0.0.1:7001 ) | port yang tidak sedang digunakan di PID masing-masing OS
// DB_HOST=localhost ( atau 127.0.0.1 )
// DB_USER=root
// DB_PASSWORD="............" (Local password)
// DB_DATABASE=movie_app

// Connection
const databaseConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

databaseConnection.connect((err) => {
  if (err) {
    console.log("Error Connecting to MySql Database", err);
    return;
  }
  console.log("MySql Database Connected");
});

export default databaseConnection;
