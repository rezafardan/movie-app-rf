import { useEffect, useRef, useState } from "react";
import profile_img from "../../../assets/profile-img.png";
import caret_icon from "../../../assets/caret_icon.svg";
import dd_profile_icon from "../../../assets/dropdown/dd_profile_icon.svg";
import dd_star_icon from "../../../assets/dropdown/dd_star_icon.svg";
import dd_logout_icon from "../../../assets/dropdown/dd_logout_icon.svg";
import DropdownLists from "./DropdownLists";
import NavbarAdmin from "./NavbarAdmin";

const NavbarRight = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOut = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".cursor-pointer")
    ) {
      setDropdownVisible(false);
    }
  };

  const toogleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <div className="flex gap-4 md:gap-28">
      <NavbarAdmin />
      <div className="flex items-center relative">
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={toogleDropdown}
        >
          <img src={profile_img} alt="" className="w-6 md:w-10" />
          <img src={caret_icon} alt="" className="w-2 md:w-4" />
        </div>

        {dropdownVisible && (
          <div
            className="absolute bg-[#181a1c] top-[180%] right-0 w-max rounded-b-md pb-1 z-10 px-3"
            ref={dropdownRef}
          >
            <DropdownLists src={dd_profile_icon} to="/profile">
              Profil Saya
            </DropdownLists>
            <DropdownLists src={dd_star_icon}>Ubah Premium</DropdownLists>
            <DropdownLists src={dd_logout_icon} to="/login">
              Keluar
            </DropdownLists>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarRight;
