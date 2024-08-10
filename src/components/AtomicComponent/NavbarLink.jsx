import { Link } from "react-router-dom";

const NavbarLink = ({ to, children }) => {
  return (
    <li className="cursor-pointer text-white hover:text-gray-400 list-none">
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavbarLink;
