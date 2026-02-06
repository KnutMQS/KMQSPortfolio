import { Link } from "react-scroll";

const linkClass =
  "text-gray-400 hover:text-fuchsia-500 rounded-md px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset-2 focus-visible:ring-blue-600 transition-all duration-200 cursor-pointer";
const activeLinkClass = "text-fuchsia-500 font-bold";

function NavLinks({
  className = "flex gap-4 text-lg justify-center items-center",
  onClick,
}) {
  const links = [
    { to: "home", text: "Home" },
    { to: "projects", text: "Projects" },
    { to: "about", text: "About" },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={onClick}
          className={linkClass}
          activeClass={activeLinkClass}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
