import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const homeNavItems = [
  { id: "home", label: "Home" },
  { id: "bodies", label: "Bodies" },
  { id: "lenses", label: "Lenses" },
  { id: "info", label: "Info" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = useMemo(() => homeNavItems.map((item) => item.id), []);
  const location = useLocation();
  const { cartCount } = useCart();

  const isCartPage = location.pathname === "/cart";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sectionIds) {
        const element = document.getElementById(section);

        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, sectionIds]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") return;

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const getSectionHref = (id: string) => {
    if (id === "home") return "/";
    return `/#${id}`;
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-7xl">
          <div className="grid h-[74px] grid-cols-[auto_1fr_auto] items-center rounded-[24px] border border-white/10 bg-[rgba(10,10,10,0.72)] px-4 shadow-[0_12px_40px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:px-6 lg:px-8">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.jpg"
                alt="Photo Shop logo"
                className="size-11 rounded-2xl object-cover ring-1 ring-white/10 sm:size-12"
              />

              <div className="hidden sm:block">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                  Photo shop
                </p>
                <p className="text-sm font-semibold text-white">
                  Camera Store
                </p>
              </div>
            </Link>

            <div className="hidden justify-center md:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-md">
                {homeNavItems.map((item) => {
                  const isActive = !isCartPage && activeSection === item.id;

                  if (isCartPage) {
                    return (
                      <Link
                        key={item.id}
                        to={getSectionHref(item.id)}
                        onClick={closeMenu}
                        className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 ${
                          isActive
                            ? "border border-red-700/60 bg-red-700/15 text-red-100"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 ${
                        isActive
                          ? "border border-red-700/60 bg-red-700/15 text-red-100"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center justify-end md:flex">
              <Link
                to="/cart"
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isCartPage
                    ? "border-red-700/60 bg-red-700/15 text-red-100"
                    : "border-white/10 bg-white/5 text-white hover:border-red-700/50 hover:bg-red-700/10"
                }`}
              >
                Cart
                <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] text-white">
                  {cartCount}
                </span>
              </Link>
            </div>

            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>

              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute inset-x-3 top-[88px] rounded-[28px] border border-white/10 bg-neutral-950/95 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <img
              src="/logo.jpg"
              alt="Photo Shop logo"
              className="size-11 rounded-2xl object-cover"
            />

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                Photo shop
              </p>
              <p className="text-sm font-semibold text-white">
                Camera Store
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {homeNavItems.map((item) => {
              const isActive = !isCartPage && activeSection === item.id;

              if (isCartPage) {
                return (
                  <Link
                    key={item.id}
                    to={getSectionHref(item.id)}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                      isActive
                        ? "border border-red-700/60 bg-red-700/15 text-red-100"
                        : "bg-white/5 text-white/75 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    handleNavClick(item.id);
                    closeMenu();
                  }}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "border border-red-700/60 bg-red-700/15 text-red-100"
                      : "bg-white/5 text-white/75 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <Link
              to="/cart"
              onClick={closeMenu}
              className={`mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                isCartPage
                  ? "border border-red-700/60 bg-red-700/15 text-red-100"
                  : "border border-white/10 bg-white/5 text-white hover:border-red-700/50 hover:bg-red-700/10"
              }`}
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};