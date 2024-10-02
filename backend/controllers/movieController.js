import databaseConnection from "../databaseConnection.js"; // buat koneksi ke database untuk menjalankan query

// Endpoint CRUD
const getAllMovies = (req, res) => {
  let query = "SELECT * FROM film WHERE 1=1";
  const params = [];

  // filter tahun, jika ada parameter years
  if (req.query.years) {
    query += " AND years = ?";
    params.push(req.query.years);
  }

  // filter judul, jika ada parameter title
  if (req.query.title) {
    query += " AND title LIKE ?";
    params.push(`%${req.query.title}%`);
  }

  // filter genre, jika ada parameter genre
  if (req.query.genre) {
    query += " AND genre = ?";
    params.push(req.query.genre);
  }

  // sorting by coloumn
  if (req.query._sort) {
    const validSortColumns = ["title", "years"]; // kalau ada parameter _sort maka akan ada ORDER BY
    if (validSortColumns.includes(req.query._sort)) {
      const sortColumn = req.query._sort;
      const sortOrder = req.query._order === "desc" ? "DESC" : "ASC";
      query += ` ORDER BY ${sortColumn} ${sortOrder}`;
    }
  }

  console.log("Eksekusi kueri:", query, "Dengan Parameter:", params);

  databaseConnection.query(query, params, (err, result) => {
    if (err) {
      console.error("Kesalahan kueri database:", err);
      res.status(500).send({ error: "Kesalahan eksekusi kueri" });
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
