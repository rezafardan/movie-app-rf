import express from "express";
import authController from "../controllers/authController.js"; // memanggil logika untuk menangani proses otentikasi
import emailVerifyRoutes from "./emailVerifyRoutes.js";

const router = express.Router(); // digunakan untuk mendefinisikan endpoint atau rute terkait otentikasi

// Endpoint Auth
router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.get("/verify-email", emailVerifyRoutes);

export default router;

// modularisasi fungsi untuk mengelompokkan rute agar maintainable
// /register ini untuk menerima permintaan post dari klien
