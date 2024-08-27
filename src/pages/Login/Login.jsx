import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import google_logo from "../../assets/google_logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Masuk");

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
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan username"
            required
          />
          <label for="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan kata sandi"
            required
          />
          {signState === "Masuk" ? (
            <></>
          ) : (
            <>
              <label for="password-confirm">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                id="password-confirm"
                placeholder="Masukkan kata sandi"
                required
              />
            </>
          )}
          <div className="form-help">
            {signState === "Masuk" ? (
              <p>
                Belum punya akun ?
                <span
                  onClick={() => {
                    setSignState("Daftar");
                  }}
                >
                  Daftar
                </span>
                <span className="forgot-password">Lupa kata sandi?</span>
              </p>
            ) : (
              <p>
                Sudah punya akun ?
                <span
                  onClick={() => {
                    setSignState("Masuk");
                  }}
                >
                  Masuk
                </span>
              </p>
            )}
          </div>
          <div className="tombol">
            <button>
              <Link className="link-style" to="/">
                {signState}
              </Link>
            </button>
            <p>Atau</p>
            <button className="google">
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
