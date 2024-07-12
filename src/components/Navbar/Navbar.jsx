import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logo_mobile from "../../assets/movie_open.svg";
import profile_img from "../../assets/profile-img.png";
import caret_icon from "../../assets/caret_icon.svg";
import dd_profile_icon from "../../assets/dropdown/dd_profile_icon.svg";
import dd_star_icon from "../../assets/dropdown/dd_star_icon.svg";
import dd_logout_icon from "../../assets/dropdown/dd_logout_icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toogleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link className="link-style" to="/">
          <img src={logo} className="logo_normal" alt="" />
          <img src={logo_mobile} className="logo_mobile" alt="" />
        </Link>
        <ul>
          <li>
            <Link className="link-style" to="/film">
              Series
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/film">
              Film
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/mylist">
              Daftar Saya
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="profile-section" onClick={toogleDropdown}>
          <img src={profile_img} alt="" className="icon" />
          <img src={caret_icon} alt="" className="caret" />
        </div>
        {dropdownVisible && (
          <div className="dropdown">
            <div className="dd-lists">
              <img src={dd_profile_icon} alt="" />
              <Link className="link-style" to="/profile">
                Profil Saya
              </Link>
            </div>
            <div className="dd-lists">
              <img src={dd_star_icon} alt="" />
              <p>Ubah Premium</p>
            </div>
            <div className="dd-lists">
              <img src={dd_logout_icon} alt="" />
              <p>
                <Link className="link-style" to="/login">
                  Keluar
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
