function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle mobile menu"
      className="group relative left-25 z-50 flex h-8 w-8 flex-col items-center justify-center rounded-md border-2 border-amber-600 bg-bg p-2 focus:outline-none"
    >
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0.5 rotate-45" : "-translate-y-0.5"
        }`}
      />
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-0.5"
        }`}
      />
    </button>
  );
}

export default MobileMenuButton;
