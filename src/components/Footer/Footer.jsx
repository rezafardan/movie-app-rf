import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={logo} alt="" />
        <div className="copyright">@2023 Chill All Rights Reserved.</div>
      </div>
      <div className="genre">
        <p>Genre</p>
        <ul>
          <li>Aksi</li>
          <li>Anak-anak</li>
          <li>Anime</li>
          <li>Britania</li>
          <li>Drama</li>
          <li>Fantasi Ilmiah & Fantasi</li>
          <li>Kejahatan</li>
          <li>KDrama</li>
          <li>Komedi</li>
          <li>Petualangan</li>
          <li>Perang</li>
          <li>Romantis</li>
          <li>Sains & Alam</li>
          <li>Thriller</li>
          <li></li>
        </ul>
      </div>
      <div className="help">
        <p>Bantuan</p>
        <ul>
          <li>FAQ</li>
          <li>Kontak Kami</li>
          <li>Privasi</li>
          <li>Syarat & Ketentuan</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
