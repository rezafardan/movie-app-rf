import React, { useEffect, useRef, useState } from "react";
import DropdownLists from "./DropdownLists";
import NavbarLink from "./NavbarLink";
import logo from "../../../assets/logo_mobile.svg";
import edit from "../../../assets/edit.svg";

const NavbarAdmin = () => {
  const [dropdown, setDropdown] = useState(false);
  const ddRef = useRef(null);

  const handleClickOut = (event) => {
    if (
      ddRef.current &&
      !ddRef.current.contains(event.target) &&
      !event.target.closest(".cursor-pointer")
    ) {
      setDropdown(false);
    }
  };

  const klikDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <div className="flex items-center relative">
      <NavbarLink onClick={klikDropdown}>Menu</NavbarLink>

      {dropdown ? (
        <div
          ref={ddRef}
          className="absolute bg-[#181a1c] top-[180%] right-0 w-max rounded-b-md pb-1 z-10 px-3"
        >
          <DropdownLists to="/add-movie" src={logo}>
            Tambah Film
          </DropdownLists>
          <DropdownLists to="/edit-movie/1" src={edit}>
            Edit Film
          </DropdownLists>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarAdmin;
