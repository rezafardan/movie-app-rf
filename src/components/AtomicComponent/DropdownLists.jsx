import NavbarLink from "./NavbarLink";

const DropdownLists = ({ src, to, children }) => {
  return (
    <div className="flex items-center p-4 gap-2">
      <img src={src} />
      <NavbarLink to={to}>{children}</NavbarLink>
    </div>
  );
};

export default DropdownLists;
