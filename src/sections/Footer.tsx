import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  IoLocationSharp,
  IoCall,
  IoMail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer
      id="info"
      className="border-t border-white/10 bg-black/95 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              My PhotoShop
            </h2>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Not the legit Canon website, just a much cooler one. Built as a
              playground for camera nerds and UI experiments.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/80 transition hover:border-red-600/70 hover:bg-red-700/25 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/80 transition hover:border-red-600/70 hover:bg-red-700/25 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/80 transition hover:border-red-600/70 hover:bg-red-700/25 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-sm text-white/80 transition hover:border-red-600/70 hover:bg-red-700/25 hover:text-white"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              About
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-red-400">
                  History
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicolemisuraca/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-red-400"
                >
                  My LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/niczetas-projects"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-red-400"
                >
                  My Vercel
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/niczeta"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-red-400"
                >
                  My GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-red-400">
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Info
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-red-400">
                  Contact me
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-red-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-red-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-red-400">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Hire me
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <IoMail className="text-lg text-white/80" />
                <span>nicolemisuraca@outlook.com</span>
              </li>
              <li className="flex items-center gap-3">
                <IoCall className="text-lg text-white/80" />
                <span>+39 334 391 5430</span>
              </li>
              <li className="flex items-center gap-3">
                <IoLogoLinkedin className="text-lg text-white/80" />
                <span>LinkedIn: Nicole Misuraca</span>
              </li>
              <li className="flex items-center gap-3">
                <IoLogoGithub className="text-lg text-white/80" />
                <span>Vercel & GitHub: niczeta</span>
              </li>
              <li className="flex items-center gap-3">
                <IoLocationSharp className="text-lg text-white/80" />
                <span>Italy, Rome (RM)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} My PhotoShop. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Crafted by Nicole Misuraca — Canon fan, not Canon official.
          </p>
        </div>
      </div>
    </footer>
  );
};