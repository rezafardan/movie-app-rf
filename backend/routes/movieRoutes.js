import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware.js";
import movieController from "../controllers/movieController.js";

const router = express.Router();

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
