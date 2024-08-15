import React from "react";
import NavbarLink from "./NavbarLink";
import logo from "../../assets/logo.png";
import logo_mobile from "../../assets/logo_mobile.png";

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-4 md:gap-20 py-2.5 px-2">
      <img src={logo} className="hidden lg:block md:block" />
      <img src={logo_mobile} className="block lg:hidden md:hidden" />
      <ul className="flex list-none gap-2 lg:gap-20 md:gap-10">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/film">Film</NavbarLink>
        <NavbarLink to="/mylist">Daftar Saya</NavbarLink>
      </ul>
    </div>
  );
};

export default NavbarLeft;
