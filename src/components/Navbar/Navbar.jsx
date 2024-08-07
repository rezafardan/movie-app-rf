import NavbarLeft from "../AtomicComponent/NavbarLeft";
import NavbarRight from "../AtomicComponent/NavbarRight";

const Navbar = () => {
  return (
    <div className="top-0 w-full py-4 px-20 flex justify-between items-center fixed z-10 bg-[#181a1c] size-sm">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
