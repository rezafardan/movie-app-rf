import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware.js"; // middleware agar klien tidak bisa akses isi web saat belum login
import movieController from "../controllers/movieController.js";

const router = express.Router();

// Endpoint CRUD
router.get(
  "/movies",
  tokenMiddleware.tokenVerify,
  movieController.getAllMovies
);
router.get(
  "/movie/:id",
  tokenMiddleware.tokenVerify,
  movieController.getMovieById
);
router.post("/movie", tokenMiddleware.tokenVerify, movieController.createMovie);
router.put(
  "/movie/:id",
  tokenMiddleware.tokenVerify,
  movieController.updateMovie
);
router.delete(
  "/movie/:id",
  tokenMiddleware.tokenVerify,
  movieController.deleteMovie
);

export default router;
