import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profile_img from "../../assets/profile-img.png";
import caret_icon from "../../assets/caret_icon.svg";
import dd_profile_icon from "../../assets/dropdown/dd_profile_icon.svg";
import dd_star_icon from "../../assets/dropdown/dd_star_icon.svg";
import dd_logout_icon from "../../assets/dropdown/dd_logout_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={profile_img} alt="" className="icon" />
        <img src={caret_icon} alt="" className="caret" />
        <div className="dropdown">
          <div className="dd-lists">
            <img src={dd_profile_icon} alt="" />
            <p>Profil Saya</p>
          </div>
          <div className="dd-lists">
            <img src={dd_star_icon} alt="" />
            <p>Ubah Premium</p>
          </div>
          <div className="dd-lists">
            <img src={dd_logout_icon} alt="" />
            <p>Keluar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
