type MobileMenuProps = {
    menuOpen: boolean; // Controls whether the menu is open or closed
    setMenuOpen: (state: boolean) => void; // Function to update the menu state
  };
  
  // MobileMenu component: A full-screen mobile navigation menu
  export const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  
    return (
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                    ${menuOpen 
                      ? "h-screen opacity-100 pointer-events-auto" // Menu is fully visible when open
                      : "h-0 opacity-0 pointer-events-none"}`}> // Menu is hidden when closed
  
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)} // Close the menu when clicked
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu">
          &times;
        </button>
  
        {/* Navigation links */}
        <a href="#home"
          onClick={() => setMenuOpen(false)} // Close menu when link is clicked
          className={`text-2xl uppercase tracking-wider font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen
                        ? "opacity-100 translate-y-0" // Visible and positioned correctly when menu is open
                        : "opacity-0 translate-y-5"}`}> {/* Initially hidden with slight downward offset */}
          Home
        </a>
  
        <a href="#bodies"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl uppercase tracking-wider font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"}`}>
          Bodies
        </a>
  
        <a href="#lenses"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl uppercase tracking-wider font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"}`}>
          Lenses
        </a>
  
        <a href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl uppercase tracking-wider font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"}`}>
          Cart
        </a>
  
        <a href="#info"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl uppercase tracking-wider font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"}`}>
          Info
        </a>
      </div>
    );
  };
  