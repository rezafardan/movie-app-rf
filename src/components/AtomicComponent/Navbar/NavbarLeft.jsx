import React from "react";
import NavbarLink from "./NavbarLink";
import logo from "../../../assets/logo.png";
import logo_mobile from "../../../assets/logo_mobile.svg";

const NavbarLeft = () => {
  return (
    <div className="flex items-center gap-3 md:gap-20 py-2.5 px-2">
      <NavbarLink to="/">
        <img src={logo} className="hidden lg:block md:block" />
        <img src={logo_mobile} className="block lg:hidden md:hidden" />
      </NavbarLink>
      <ul className="flex list-none gap-3 text-sm md:text-base lg:gap-20 md:gap-10">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/film">Film</NavbarLink>
      </ul>
    </div>
  );
};

export default NavbarLeft;
