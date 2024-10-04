import express from "express";
import authController from "../controllers/authController.js";
import emailVerifyRoutes from "./emailVerifyRoutes.js";

const router = express.Router();

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.get("/verify-email", emailVerifyRoutes);

export default router;
