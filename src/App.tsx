import { Navbar } from "./components/Navbar";
import { Home } from "./sections/Home";
import { MobileMenu } from "./components/MobileMenu";
import { useState } from "react";
import { Bodies } from "./sections/Bodies";
import { Lenses } from "./sections/Lenses";
import { Footer } from "./sections/Footer";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Bodies />
        <Lenses />
        <Footer />
    </>
  );
}