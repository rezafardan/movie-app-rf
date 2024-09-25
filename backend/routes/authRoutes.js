import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Endpoint Auth
router.post("/register", authController.Register);
router.post("/login", authController.Login);

export default router;
