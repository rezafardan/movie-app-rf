import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div
      className="top-0 h-fit w-full py-3 md:py-6 px-[4%] flex justify-between items-center fixed z-20 bg-[#181a1c]
] size-sm"
    >
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
