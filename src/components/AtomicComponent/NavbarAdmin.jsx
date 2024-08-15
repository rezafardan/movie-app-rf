import React, { useEffect, useRef, useState } from "react";
import DropdownLists from "./DropdownLists";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

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
      <NavbarLink onClick={klikDropdown}>Admin</NavbarLink>

      {dropdown ? (
        <div
          ref={ddRef}
          className="absolute bg-[#181a1c] top-[192%] right-[-80%] w-max rounded-b-md pb-1 z-10 px-3"
        >
          <DropdownLists to="/add-movie">Tambah Film</DropdownLists>
          <DropdownLists to="/edit-movie/1">Edit Film</DropdownLists>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarAdmin;
