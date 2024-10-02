import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

// untuk cek apakah permintaan klien menyertakan token jwt valid
const tokenVerify = (req, res, next) => {
  // mengambil authorization yang dikirim oleh klien
  const authHeader = req.headers["authorization"];

  // logika validasi jika tidak ada headers maka respon 403 Forbidden
  if (!authHeader) {
    return res.status(403).json({ message: "Token tidak tersedia" });
  }

  // logiga validasi format token
  const tokenParts = authHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return res.status(403).json({ message: "Format token tidak valid" });
  }

  // logika mengambil token dan verifikasi token
  const token = tokenParts[1]; // mengambil token tanpa bearer
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // ada 2 argumen jwt.verify(), token yang diperiksa, kunci rahasia, error/null maka 401 Unauthorized, jika sama maka decoded dan disimpan data pada req,usesr
    if (err) {
      return res
        .status(401)
        .json({ message: "Token tidak sah atau tidak valid" });
    }

    req.user = decoded;
    next();
  });
};

export default { tokenVerify }; // akan dipakai di movieroutes biar klien tidak bisa buka sebelum login
