import { useState } from "react";
import reactLogo from "/Logo";
import viteLogo from "/Logo";
import "./index.css";

function Login() {
  return (
    <>
      <main id="login-page">
        <img src="Logo" alt="Chill Logo" />
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
            <img src="google-logo.svg" alt="" />
            Masuk dengan Google
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;



import { useState } from "react";
import reactLogo from "/Logo";
import viteLogo from "/Logo";
import "./index.css";

function Register() {
  return (
    <>
      <main id="login-page">
        <img src="Logo" alt="Chill Logo" />
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
              <img src="google-logo.svg" alt="" />
              Daftar dengan Google
            </button>
          </section>
        </form>
      </main>
    </>
  );
}

export default Register;
