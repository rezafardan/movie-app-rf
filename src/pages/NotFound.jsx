import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl">404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <p>
        Kembali ke{" "}
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={handleRedirect}
        >
          Movie App
        </span>
      </p>
    </div>
  );
};

export default NotFound;
