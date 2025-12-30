import { NavLink } from "react-router-dom";

const getLinkClass = ({ isActive }) =>
  `transition-all duration-200 ${
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
