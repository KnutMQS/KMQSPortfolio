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
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-solid border-b-2 bg-bg border-fuchsia-800 px-3 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-around">
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-fuchsia-500"
          onClick={closeMenu}
        >
          KMQS
        </Link>
        <div className="hidden md:block">
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
