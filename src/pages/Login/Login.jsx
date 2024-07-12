import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import google_logo from "../../assets/google_logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Masuk");

  return (
    <div className="login">
      <div className="container">
        <img src={logo} alt="Chill Logo" className="logo-img" />
        <div className="welcome-text">
          <h1>{signState}</h1>
          <h4>Selamat datang{signState === "Masuk" ? " kembali" : ""}!</h4>
        </div>
        <form id="login-form">
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
