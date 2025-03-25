import { useEffect, useState } from "react";

type NavbarProps = {
  menuOpen: boolean; // Indicates whether the mobile menu is open or closed
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to update the menu state
};

// Navbar component: manages the navigation bar
export const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  // State to track the active section while scrolling the page
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Disable scrolling on the body when the mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";

    // Function to update the active section based on scroll position
    const handleScroll = () => {
      const sections = ["home", "bodies", "lenses", "cart", "info"];
      const scrollPosition = window.scrollY + 200; // Offset to account for actual position in the viewport

      // Check which section the scroll is in
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Stop the loop once the active section is found
          }
        }
      }
    };

    // Add event listener to update active section while scrolling
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts or the menu state changes
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]); // Effect runs every time menuOpen changes

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4
                      lg:px-28 lg:mx-0 lg:max-w-full">
        <div className="flex justify-between items-center h-18">
          {/* Logo, clicking redirects to the Home section */}
          <a href="#home">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="size-12 rounded-full
                        lg:size-14 "
            />
          </a>

          {/* Mobile menu icon (visible only on small screens) */}
          <div
            className="w-7 h-5 relative text-white cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)} // Toggles the mobile menu state
          >
            &#9776; {/* Icon */}
          </div>

          {/* Desktop menu (visible only on large screens) */}
          <div className="uppercase font-semibold tracking-wide hidden md:flex items-center space-x-8">
            {/* Loop through sections and render links with active state */}
            {["home", "bodies", "lenses", "cart", "info"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-white rounded py-2 px-4 transition-colors ${
                  activeSection === section ? "bg-red-800" : "hover:bg-red-800"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize first letter */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
