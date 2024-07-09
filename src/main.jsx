import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Daftar from "./Register.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Daftar />
  </React.StrictMode>
);
