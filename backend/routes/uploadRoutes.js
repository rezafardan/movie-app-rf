import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const fileName = `${file.fieldname}-${timestamp}${path.extname(
      file.originalname
    )}`;

    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("File harus berupa gambar"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: fileFilter,
});

router.post("/", upload.single("file"), (req, res) => {
  try {
    const filePath = `uploads/${req.file.filename}`;
    res.send({ message: "File berhasil terkirim", filePath });
  } catch (error) {
    res.status(400).send({ message: "Kesalahan mengirim file", error });
  }
});

export default router;
