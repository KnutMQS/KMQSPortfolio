import { NavLink } from "react-router-dom";

function NavLinks({ className, onClick }) {
  const containerClass =
    className || "flex gap-4 text-lg justify-center items-center";

  return (
    <div className={containerClass}>
      <NavLink
        to="/"
        onClick={onClick}
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "text-fuchsia-500 font-bold"
              : "text-gray-400  hover:text-fuchsia-500"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={onClick}
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "text-fuchsia-500 font-bold"
              : "text-gray-400 hover:text-fuchsia-500"
          }`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        onClick={onClick}
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "text-fuchsia-500 font-bold"
              : "text-gray-400 hover:text-fuchsia-500"
          }`
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default NavLinks;
