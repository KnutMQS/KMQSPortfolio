import { useEffect } from "react";

function MobileMenuOverlay({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`absolute right-0 top-0 h-full w-3/4 max-w-sm transform bg-bg shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center p-8 border-l-2 border-violet-500">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MobileMenuOverlay;
