// app.js
import express from "express"; // framework untuk mempermudah pengelolaan server http
import cors from "cors"; // middleware untuk mengatur cross origin resource sharing, aturan buat mengizinkan permintaan dari domain berbeda (fe dan be dihost di beda domain)
import dotenv from "dotenv"; // modul buat env (keamanan)
import movieRoutes from "./routes/movieRoutes.js"; // rute film
import authRoutes from "./routes/authRoutes.js"; // rute autentikasi
import uploadRoutes from "./routes/uploadRoutes.js";
// import profileRoutes from "./routes/profileRoutes.js";
import path from "path";

dotenv.config({ path: "../../.env" }); // nyari path data .env

const app = express(); // inisialisasi express di port 7001
const port = 7001;

app.use(cors()); // aktivasi cors untuk izin permintaan dari domain luar
app.use(express.json()); // middleware untuk menangani request dengan konten json

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/", movieRoutes); // rute yang ada dalam movieRoutes akan diakses di jalur /
app.use("/auth", authRoutes); // rute yang ada dalam movieRoutes akan diakses di jalur /auth
app.use("/upload", uploadRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

// aplikasi dimulai dengan menjalankan app.listen()
// saat server menerima permintaan klien, permintaan akan lewat middleware cors
// express.json() dibuat untuk mengurai body dari permintaan jika bentuk json
