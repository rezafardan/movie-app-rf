import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import arrow_footer from "../../assets/arrow_footer.svg";

const Footer = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const toggleGenre = () => {
    setShowGenre(!showGenre);
    setShowHelp(false);
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
    setShowGenre(false);
  };

  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={logo} alt="" />
        <p className="copyright">@2023 Chill All Rights Reserved.</p>
      </div>
      <div className="genre">
        <p className="genre-toogle" onClick={toggleGenre}>
          Genre
          <span>
            <img src={arrow_footer} alt="" />
          </span>
        </p>
        <ul className={`genre-list ${showGenre ? "show" : ""}`}>
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
        <p className="help-toogle" onClick={toggleHelp}>
          Bantuan
          <span>
            <img src={arrow_footer} alt="" />
          </span>
        </p>
        <ul className={`help-list ${showHelp ? "show" : ""}`}>
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
