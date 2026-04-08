import { Outlet } from "react-router-dom";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <Navbar />

      <main className="relative flex-1 overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};