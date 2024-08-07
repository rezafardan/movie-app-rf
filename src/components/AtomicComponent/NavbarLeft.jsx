import React from "react";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logo.png";

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-20 md:flex-wrap md:py-2.5 md:px-5">
      <img src={logo} className="block" />
      <ul className="flex list-none gap-10">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="film">Series</NavbarLink>
        <NavbarLink to="/film">Film</NavbarLink>
        <NavbarLink to="/mylist">Daftar Saya</NavbarLink>
        <NavbarLink to="/add-movie">Add New Movie</NavbarLink>
        <NavbarLink to="/edit-movie">Edit Movie</NavbarLink>
      </ul>
    </div>
  );
};

export default NavbarLeft;
