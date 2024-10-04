import React, { useState } from "react";
import logo from "../../assets/logo.png";
import google_logo from "../../assets/google_logo.svg";
import { useNavigate } from "react-router-dom";
import axiosIstance from "../../axiosConfig";
import { setUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosIstance.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;
      console.log(response.data);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage("Tidak ada respon dari server, silahkan ulangi");
      } else {
        setErrorMessage("Kesalahan: " + error.message);
      }
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const input =
    "h-12 bg-transparent rounded-full border px-5 mb-9 text-white text-base font-light";

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/bg_login.jpg')] bg-cover bg-center">
      <div className="bg-[#181a1ccc] flex flex-col items-center gap-9 rounded-2xl p-10 w-[90%] sm:w-[70%] md:w-[50%] my-10">
        <img src={logo} alt="Chill Logo" className="" />

        <div className="text-center">
          <h1>Masuk</h1>
          <h4 className="mt-2 text-base font-light">Selamat datang!</h4>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <form onSubmit={handleLogin} className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="text"
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

          <div className="flex flex-col gap-2 relative mt-[-25px]">
            <p className="font-light text-[#c1c2c4]">
              Belum punya akun ?
              <button
                className="cursor-pointer text-white font-medium ml-2"
                onClick={handleRegister}
                type="button"
              >
                Daftar
              </button>
              <span className="absolute right-0 cursor-pointer text-white font-medium ml-2">
                Lupa kata sandi?
              </span>
            </p>
          </div>
          <div className="mt-9 flex flex-col justify-center items-center gap-2">
            <button
              type="submit"
              className="h-12 w-full bg-[#3d4142] rounded-full border px-5 font-normal"
            >
              Masuk
            </button>
            <p className="font-light text-[#c1c2c4]">Atau</p>
            <button className="flex justify-center items-center gap-5 bg-transparent h-12 w-full rounded-full border px-5 font-normal">
              <img src={google_logo} alt="" />
              Masuk dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
