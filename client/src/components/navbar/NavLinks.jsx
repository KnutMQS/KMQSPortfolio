import { NavLink } from "react-router-dom";

function NavLinks({ className, onClick }) {
  const containerClass =
    className || "flex gap-4 justify-center items-center mx-auto";

  return (
    <div className={containerClass}>
      <NavLink
        to="/"
        onClick={onClick}
        className={({ isActive }) =>
          `transition-colors duration-200 ${
            isActive
              ? "text-fuchsia-500 text-xl font-bold"
              : "text-gray-400  hover:text-fuchsia-500 hover:scale-110"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={onClick}
        className={({ isActive }) =>
          `transition-colors duration-200 ${
            isActive
              ? "text-fuchsia-500 font-bold"
              : "text-gray-400 hover:text-fuchsia-500 hover:scale-110"
          }`
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default NavLinks;
