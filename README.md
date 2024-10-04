# Movie App Website

## _Platform Web untuk Menampilkan dan Mengelola Data Film_

Movie App adalah sebuah platform web yang memungkinkan pengguna untuk melihat daftar film yang menampilkan poster, judul, dan deskripsi. Pengguna dapat melakukan registrasi, login, serta mengelola (CRUD) data film dengan keamanan berbasis token JWT. Aplikasi ini dibangun menggunakan teknologi React.js, Tailwind CSS, Express.js, dan MySQL.

## Fitur Utama

- Registrasi dan login pengguna dengan keamanan berbasis token JWT.
- Menampilkan daftar film lengkap dengan poster, judul, dan deskripsi.
- CRUD film (Create, Read, Update, Delete).
- Pengelolaan pengguna dengan hashing password menggunakan bcrypt.
- Koneksi ke database MySQL untuk penyimpanan data.

## Teknologi

Movie App memanfaatkan berbagai teknologi open-source agar berjalan dengan baik:

### Frontend:

- **React.js**: Library untuk membangun antarmuka pengguna (UI).
- **Tailwind CSS**: Framework CSS untuk styling yang cepat dan efisien.
- **Axios**: Library untuk menangani request HTTP.
- **Redux**: Library untuk state management aplikasi.
- **Vite**: Build tool untuk pengembangan frontend yang cepat.

### Backend:

- **Node.js**: Evented I/O untuk backend.
- **Express**: Framework untuk membangun REST API.
- **MySQL**: Database yang digunakan untuk menyimpan data pengguna dan film.
- **bcrypt.js**: Untuk hashing password pengguna.
- **dotenv**: Untuk mengelola konfigurasi environment.
- **CORS**: Middleware untuk menangani akses API lintas domain.
- **JWT (JSON Web Token)**: Digunakan untuk autentikasi berbasis token.

/_
** menggunakan Node JS (Install node.js)
** menggunakan MySql (Install MySql)
** setelah menginstall semua, lanjutkan dengan `npm run dev' dan
** cd /backend ~> `node databaseConnection.js` di terminal / command prompt untuk memulai koneksi ke database MySql
** untuk create database bisa login ke MySql dan copy paste kan seluruh code yang ada di di schema.sql
** jangan lupa untuk buat file .env bila tidak ada
_/

// .env file
// VITE_API_URL=http://localhost:7001 ( atau htttp://127.0.0.1:7001 ) | port yang tidak sedang digunakan di PID masing-masing OS
// DB_HOST=localhost ( atau 127.0.0.1 )
// DB_USER=root
// DB_PASSWORD="............" (Local password)
// DB_DATABASE=movie_app
