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
              ? "text-amber-600 font-bold"
              : "text-gray-500  hover:text-amber-600"
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
              ? "text-amber-600 font-bold"
              : "text-gray-500  hover:text-amber-600"
          }`
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default NavLinks;
