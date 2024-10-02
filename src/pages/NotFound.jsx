import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timer = setTimeout(() => {
      const token = localStorage.getItem("token");

      if (token) {
        navigate("/");
      } else {
        navigate("/login");
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [navigate]);

  return (
    <div className="text-center">
      <h1 className="text-4xl">404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ada.</p>
      <p>Anda akan diarahkan ke halaman yang sesuai dalam {seconds} detik...</p>
    </div>
  );
};

export default NotFound;
