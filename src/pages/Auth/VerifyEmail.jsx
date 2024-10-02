import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosIstance from "../../axiosConfig";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");

      console.log(token);

      if (!token) {
        return alert("Token tidak valid");
      }

      try {
        const response = await axiosIstance.get(`/verify-email?token=${token}`);
        alert(response.data.message);
        navigate("/login");
      } catch (error) {
        console.error("Kesalahan saat verifikasi email", error);
        alert("Verifikasi gagal. Silakan coba lagi nanti");
      }
    };
    verifyToken();
  }, [location, navigate]);

  return (
    <div>
      <h2>Verifikasi Email</h2>
      <p>Sedang memverifikasi email Anda, harap tunggu...</p>
    </div>
  );
};

export default VerifyEmail;
