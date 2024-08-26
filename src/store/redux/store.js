// initial state : state awal yang berupa array kosong yang nantinya akan diisi dengan data API

// reducer untuk data API : reducer untuk menangani data hasil dari API dan menyimpannya ke dalam state global

// setelah itu daftarkan reducer yang dibuat ke dalam store.js

// selanjutnya hubungkan store.js ke root aplikasi (index.js / main.js) menggunakan provider ( provider akan menyediakan akses ke state store untuk seluruh komponen didalamnya)

// hapus useContext dan rubah semua menggunakan redux untuk membuat global state

import { configureStore } from "@reduxjs/toolkit";

import apiReducer from "../features/index.js";

export default configureStore({
  reducer: {
    tes: apiReducer,
  },
});
