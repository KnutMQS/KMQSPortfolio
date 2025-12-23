import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-solid border-b-2 border-amber-600 px-3 py-4">
      <NavLinks />
    </nav>
  );
}

export default Navbar;
