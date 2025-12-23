import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex gap-4 justify-center items-center mx-auto">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `inline-block transition-transform duration-200 ease-in-out ${
            isActive
              ? "text-amber-600 font-bold text-lg"
              : "text-gray-500  hover:text-white hover:scale-110"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `inline-block transition-transform duration-200 ease-in-out ${
            isActive
              ? "text-amber-600 font-bold text-lg"
              : "text-gray-500  hover:text-white hover:scale-110"
          }`
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default NavLinks;
