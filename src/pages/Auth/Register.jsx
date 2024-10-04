import React, { useState } from "react";
import logo from "../../assets/logo.png";
import google_logo from "../../assets/google_logo.svg";
import { useNavigate } from "react-router-dom";
import axiosIstance from "../../axiosConfig";

const Login = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      console.log("Password tidak sama");
      return;
    }

    try {
      const response = await axiosIstance.post("/auth/register", {
        fullname,
        username,
        password,
        email,
      });

      console.log("User registered:", response.data);
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.log(`Kesalahan: ${err.response.data.message}`);
        console.log(`Kode Status: ${err.response.status}`);
      } else if (err.request) {
        console.log(`Kesalahan permintaan: ${err.request}`);
      } else {
        console.log(`Kesalahan: ${err.message}`);
      }
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const input =
    "h-12 bg-transparent rounded-full border px-5 mb-9 text-white text-base font-light";

  return (
    <div className="h-full flex flex-col justify-center items-center bg-[url('/bg_login.jpg')] bg-cover bg-center">
      <div className="bg-[#181a1ccc] flex flex-col items-center gap-9 rounded-2xl p-10 w-[90%] sm:w-[70%] md:w-[50%] my-10">
        <img src={logo} alt="Chill Logo" className="h-11" />

        <div className="text-center">
          <h1>Daftar</h1>
          <h4 className="mt-2 text-base font-light">Selamat datang</h4>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col w-full">
          <label htmlFor="fullname" className="mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Masukkan Nama Lengkap"
            className={input}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <label htmlFor="username" className="mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Masukkan username"
            className={input}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password" className="mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan email"
            className={input}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="mb-2">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Masukkan kata sandi"
            className={input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword" className="mb-2">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Masukkan ulang kata sandi"
            className={input}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />

          <div className="flex flex-col gap-2 relative mt-[-25px]">
            <p className="font-light text-[#c1c2c4]">
              Sudah punya akun ?
              <button
                onClick={handleLogin}
                className="cursor-pointer text-white font-medium ml-2"
                type="button"
              >
                Masuk
              </button>
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center items-center gap-2">
            <button
              type="submit"
              className="h-12 w-full bg-[#3d4142] rounded-full border px-5 font-normal"
            >
              Daftar
            </button>
            <p className="font-light text-[#c1c2c4]">Atau</p>
            <button className="flex justify-center items-center gap-5 bg-transparent h-12 w-full rounded-full border px-5 font-normal">
              <img src={google_logo} alt="" />
              Daftar dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
