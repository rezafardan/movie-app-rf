import databaseConnection from "../databaseConnection.js";

const emailVerifyRoutes = async (req, res) => {
  const { token } = req.query;

  console.log("Received token:", token);

  if (!token) {
    return res.status(400).json({ message: "Token tidak disediakan" });
  }

  try {
    // Update is_verified menjadi true jika token cocok
    const query = `UPDATE user SET is_verified = TRUE, verification_token = NULL WHERE verification_token = ?`;

    const result = await new Promise((resolve, reject) => {
      databaseConnection.query(query, [token], (err, results) => {
        if (err) {
          console.error("Kesalahan saat mengupdate data:", err);
          return reject(err);
        }
        resolve(results);
      });
    });

    // Cek hasil dari query
    console.log("Hasil dari query:", result); // Tambahkan logging untuk hasil query

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Email berhasil diverifikasi" });
    } else {
      return res.status(400).json({ message: "Token tidak valid" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

export default emailVerifyRoutes;
