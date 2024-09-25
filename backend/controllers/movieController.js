import databaseConnection from "../databaseConnection.js";

// Endpoint CRUD
const getAllMovies = (req, res) => {
  const query = "SELECT * FROM film;";

  databaseConnection.query(query, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error eksekusi query" });
      return;
    }
    res.json(result);
  });
};

const getMovieById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM film WHERE id = ?";
  databaseConnection.query(query, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Terjadi kesalahan saat mengambil data" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Film tidak ditemukan" });
    }
    res.json(result[0]);
  });
};

const createMovie = (req, res) => {
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res
      .status(400)
      .json({ error: "Kolom yang diperlukan tidak lengkap" });
  }

  const query =
    "INSERT INTO film (title, years, extract, thumbnail) VALUES (?, ?, ?, ?)";
  databaseConnection.query(
    query,
    [title, years, extract, thumbnail],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Terjadi kesalahan saat memasukkan data" });
      }
      res
        .status(201)
        .json({ id: result.insertId, title, years, extract, thumbnail });
    }
  );
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, years, extract, thumbnail } = req.body;

  if (!title || !years || !extract || !thumbnail) {
    return res
      .status(400)
      .json({ error: "Kolom yang diperlukan tidak lengkap" });
  }

  const query =
    "UPDATE film SET title = ?, years = ?, extract = ?, thumbnail = ? WHERE id = ?";
  databaseConnection.query(
    query,
    [title, years, extract, thumbnail, id],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Terjadi kesalahan saat memperbarui data" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Film tidak ditemukan" });
      }
      res.json({ message: "Film berhasil diperbarui" });
    }
  );
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM film WHERE id = ?";
  databaseConnection.query(query, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Terjadi kesalahan saat menghapus film" });
    }
    res.status(204).json({ message: "Film berhasil dihapus" });
  });
};

export default {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
