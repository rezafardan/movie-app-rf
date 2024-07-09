import { useState } from "react";
import reactLogo from "/Logo.png";
import viteLogo from "/Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <main id="login-page">
        <img src="Logo.png" alt="Chill Logo" />
        <h1>Masuk</h1>
        <h4>Selamat datang kembali!</h4>
        <form id="login-form">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Masukkan username" />
          <label for="password">Password</label>
          <input type="password" placeholder="Masukkan kata sandi" />
          <p class="lalala">
            <span>
              belum punya akun ? <a href="#">Daftar</a>
            </span>
            <span>
              <a href="#">Lupa kata sandi?</a>
            </span>
          </p>
          <button type="submit">Masuk</button>
          <p>Atau</p>
          <button type="submit" class="google">
            <img src="google-logo.png" alt="" />
            Masuk dengan Google
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
