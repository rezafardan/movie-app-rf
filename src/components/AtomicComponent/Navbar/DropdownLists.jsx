import NavbarLink from "./NavbarLink";

const DropdownLists = ({ src, to, children, onClick }) => {
  return (
    <div
      className="flex items-center justify-start pr-2 py-2 gap-[5px]"
      onClick={onClick}
    >
      <img src={src} className="w-6 h-6 p-1" />
      <NavbarLink to={to}>{children}</NavbarLink>
    </div>
  );
};

export default DropdownLists;
