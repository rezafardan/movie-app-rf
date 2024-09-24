import { Link } from "react-router-dom";

const NavbarLink = ({ to, children, onClick }) => {
  return (
    <li className="cursor-pointer text-white hover:text-gray-400 list-none text-sm md:text-base">
      <Link to={to} onClick={onClick} className="no-underline">
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
