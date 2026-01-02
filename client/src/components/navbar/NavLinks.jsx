import { NavLink } from "react-router-dom";

const getLinkClass = ({ isActive }) =>
  `rounded-md px-1 focus:outline-none focus:ring-2 focus:ring-inset-2 focus:ring-blue-600 transition-all duration-200 ${
    isActive
      ? "text-fuchsia-500 font-bold"
      : "text-gray-400  hover:text-fuchsia-500"
  }`;

function NavLinks({
  className = "flex gap-4 text-lg justify-center items-center",
  onClick,
}) {
  const links = [
    { to: "/", text: "Home" },
    { to: "/projects", text: "Projects" },
    { to: "/about", text: "About" },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={getLinkClass}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
