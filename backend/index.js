import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";

dotenv.config({ path: "../../.env" });

const app = express();
const port = 7001;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/", movieRoutes);
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
