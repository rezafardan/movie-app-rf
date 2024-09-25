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
