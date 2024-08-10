import { useState } from "react";
import profile_img from "../../assets/profile-img.png";
import caret_icon from "../../assets/caret_icon.svg";
import dd_profile_icon from "../../assets/dropdown/dd_profile_icon.svg";
import dd_star_icon from "../../assets/dropdown/dd_star_icon.svg";
import dd_logout_icon from "../../assets/dropdown/dd_logout_icon.svg";
import DropdownLists from "./DropdownLists";

const NavbarRight = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toogleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="flex items-center relative">
      <div
        className="flex items-center cursor-pointer gap-2"
        onClick={toogleDropdown}
      >
        <img src={profile_img} alt="" className="icon" />
        <img src={caret_icon} alt="" className="caret" />
      </div>

      {dropdownVisible && (
        <div className="absolute bg-[#181a1c] top-[192%] right-[-80%] w-max rounded-b-md pb-1 z-10 px-3">
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
  );
};

export default NavbarRight;
