import { useState } from "react";
import reactLogo from "/Logo.png";
import viteLogo from "/Logo.png";
import "./App.css";

function Daftar() {
  return (
    <>
      <main id="login-page">
        <img src="Logo.png" alt="Chill Logo" />
        <h1>Daftar</h1>
        <h4>Selamat datang</h4>
        <form id="login-form">
          <section>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Masukkan username" />
          </section>
          <section>
            <label for="password">Kata Sandi</label>
            <input type="password" placeholder="Masukkan kata sandi" />
          </section>
          <section>
            <label for="password">Konfirmasi Kata Sandi</label>
            <input type="password" placeholder="Masukkan kata sandi" />
            <p class="lalala">
              <span>
                Sudah punya akun ? <a href="#">Masuk</a>
              </span>
            </p>
          </section>
          <section>
            <button type="submit">Daftar</button>
            <p>Atau</p>
            <button type="submit" class="google">
              <img src="google-logo.png" alt="" />
              Daftar dengan Google
            </button>
          </section>
        </form>
      </main>
    </>
  );
}

export default Daftar;
