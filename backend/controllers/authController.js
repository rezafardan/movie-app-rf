import bcrypt from "bcryptjs"; // library hashing password
import jwt from "jsonwebtoken"; // library membuat token
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import databaseConnection from "../databaseConnection.js";

dotenv.config({ path: "../../.env" });

// https://security.google.com/settings/security/apppasswords

// Registration
const Register = async (req, res) => {
  const { fullname, username, password, email } = req.body;

  try {
    const salt = await bcrypt.genSalt(10); // menghasilkan nilai acak untuk keamanan
    const hashedPassword = await bcrypt.hash(password, salt); // hasing dari password menggunakan salt diatas
    const verificationToken = uuidv4();

    console.log(verificationToken);

    const query =
      "INSERT INTO user (fullname, username, password, email, verification_token, is_verified) VALUES (?, ?, ?, ?, ?, FALSE)"; // pakai ? agar menghindari SQL Injection
    const values = [
      fullname,
      username,
      hashedPassword,
      email,
      verificationToken,
    ];

    await new Promise((resolve, reject) => {
      databaseConnection.query(query, values, (err) => {
        if (err) {
          console.error("Kesalahan saat memasukkan pengguna ke dalam database");
          return reject(
            res.status(500).json({
              message:
                "Kesalahan database Server tidak bisa memenuhi permintaan karena kondisi yang tidak terduga.",
            })
          );
        }
        resolve();
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email verifikasi",
      html: `
      <h2>Halo ${fullname},</h2>
          <p>Terima kasih telah mendaftar. Silakan verifikasi email Anda dengan mengklik tautan di bawah ini:</p>
          <a href="${process.env.VITE_API_URL}/auth/verify-email?token=${verificationToken}">Verifikasi Email</a>
        `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email terkirim");
      return res.status(201).json({
        message:
          "Pengguna berhasil terdaftar, silakan periksa email Anda untuk verifikasi.",
      });
    } catch (emailError) {
      console.log("Terjadi kesalahan saat mengirim email: ", emailError);
      return res.status(500).json({
        message:
          "Pengguna berhasil terdaftar, tetapi terjadi kesalahan saat mengirim email verifikasi.",
      });
    }
  } catch (error) {
    console.error("Terjadi kesalahan hashing kata sandi", error);
    return res.status(500).json({ message: "Kesalahan server" });
  }
};

// Login
const Login = async (req, res) => {
  const { email, password } = req.body; // destrukturing isi body

  console.log("Ini isi dari email", email);

  try {
    const query = "SELECT * FROM user WHERE email = ?"; // cari data berdasarkan email
    databaseConnection.query(query, [email], async (err, results) => {
      if (err) {
        console.error("Kesalahan database", err);
        return res.status(500).json({ message: "Kesalahan database" }); // kode 500 server error
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Email atau password salah" }); // kode 401 unauthorized
      }

      const user = results[0]; // result dari callback

      if (!user.is_verified) {
        return res.status(403).json({
          message: "Silakan verifikasi email Anda sebelum melakukan login.",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password); // variabel compare password dari req.body dengan hasil callback
      if (!isMatch) {
        return res.status(401).json({ message: "Email atau password salah" }); // kode 401 unauthorized
      }

      // jika password cocok lanjut membuat token, isi id pengguna
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      });
    });
  } catch (error) {
    console.error("Kesalahan saat masuk", error);
    res.status(500).json({ message: "Kesalahan server" }); // kode 500 server error
  }
};

export default { Register, Login }; // controller ini akan digunakan di authRoutes
