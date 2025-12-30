import { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuOverlay from "./MobileMenuOverlay";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="fixed top-0 z-50 w-full bg-bg px-3 py-4 shadow-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-linear-to-r after:from-violet-500 after:to-fuchsia-500">
      <div className="mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="fixed text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-fuchsia-500"
          onClick={closeMenu}
        >
          KMQS
        </Link>
        <div className="hidden md:flex md:justify-center md:items-center md:mx-auto">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
      <MobileMenuOverlay isOpen={isOpen} onClose={closeMenu}>
        <NavLinks
          className="flex flex-col items-center gap-6 text-xl"
          onClick={closeMenu}
        />
      </MobileMenuOverlay>
    </nav>
  );
}

export default Navbar;
