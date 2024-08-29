import React, { useState } from "react";
import logo from "../../assets/logo.png";
import google_logo from "../../assets/google_logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Masuk");

  const input =
    "h-12 bg-transparent rounded-full border px-5 mb-9 text-white text-base font-light";

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/bg_login.jpg')] bg-cover bg-center">
      <div className="bg-[#181a1ccc] flex flex-col items-center gap-9 rounded-2xl p-10 w-[90%] sm:w-[70%] md:w-[50%]">
        <img src={logo} alt="Chill Logo" className="h-11" />
        <div className="text-center">
          <h1>{signState}</h1>
          <h4 className="mt-2 text-base font-light">
            Selamat datang{signState === "Masuk" ? " kembali" : ""}!
          </h4>
        </div>
        <form id="login-form" className="flex flex-col w-full">
          <label for="username" className="mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan username"
            className={input}
            required
          />
          <label for="password" className="mb-2">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan kata sandi"
            className={input}
            required
          />
          {signState === "Masuk" ? (
            <></>
          ) : (
            <>
              <label for="password-confirm" className="mb-2">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                id="password-confirm"
                placeholder="Masukkan kata sandi"
                className={input}
                required
              />
            </>
          )}
          <div className="flex flex-col gap-2 relative mt-[-25px]">
            {signState === "Masuk" ? (
              <p className="font-light text-[#c1c2c4]">
                Belum punya akun ?
                <span
                  className="cursor-pointer text-white font-medium ml-2"
                  onClick={() => {
                    setSignState("Daftar");
                  }}
                >
                  Daftar
                </span>
                <span className="absolute right-0 cursor-pointer text-white font-medium ml-2">
                  Lupa kata sandi?
                </span>
              </p>
            ) : (
              <p className="font-light text-[#c1c2c4]">
                Sudah punya akun ?
                <span
                  className="cursor-pointer text-white font-medium ml-2"
                  onClick={() => {
                    setSignState("Masuk");
                  }}
                >
                  Masuk
                </span>
              </p>
            )}
          </div>
          <div className="mt-9 flex flex-col justify-center items-center gap-2">
            <button className="h-12 w-full bg-[#3d4142] rounded-full border px-5 font-normal">
              <Link className="link-style" to="/">
                {signState}
              </Link>
            </button>
            <p className="font-light text-[#c1c2c4]">Atau</p>
            <button className="flex justify-center items-center gap-5 bg-transparent h-12 w-full rounded-full border px-5 font-normal">
              <img src={google_logo} alt="" />
              {signState} dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
