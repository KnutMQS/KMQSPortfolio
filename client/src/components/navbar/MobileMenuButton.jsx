function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onclick}
      aria-expanded={isOpen}
      aria-label="Toggle mobile menu"
      className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center rounded-md border border-gray-200 bg-bg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-1.5 rotate-45" : "translate-y-1"
        }`}
      />
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`h-0.5 w-6 rounded bg-amber-500 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-1.5 rotate-45" : "translate-y-1"
        }`}
      />
    </button>
  );
}

export default MobileMenuButton;
