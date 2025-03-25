import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {

  return (
    // Footer container with a black background and white text
    <footer className="bg-black text-white" id="info">

      {/* Main content area with responsive grid layout */}
      <div className="container mt-12 mx-auto grid grid-cols-1 px-8 py-12 gap-x-12 md:grid-cols-2 lg:grid-cols-4">

        {/* 1st section: social media links */}
        <div className="col-span-1 py-8 md:py-0">
          <h2 className="text-2xl font-semibold tracking-wider mb-3">My PhotoShop</h2>
          {/* Social media icons */}
          <div className="flex gap-x-8 mt-8 lg:mt-12">
            <a href="#" className="text-xl md:text-3xl lg:text-3xl hover:text-red-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl md:text-3xl lg:text-3xl hover:text-red-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl md:text-3xl lg:text-3xl hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl md:text-3xl lg:text-3xl hover:text-red-600">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* 2nd Section: about us links */}
        <div className="col-span-1 py-8 md:py-0">
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <ul className="flex flex-col gap-y-3">
            <li><a href="#" className="hover:text-red-600 text-lg">History</a></li>
            <li><a href="https://www.linkedin.com/in/nicolemisuraca/" target="_blank" className="hover:text-red-600 text-lg">My Linkedin</a></li>
            <li><a href="https://vercel.com/niczetas-projects" target="_blank" className="hover:text-red-600 text-lg">My Vercel</a></li>
            <li><a href="https://github.com/niczeta" target="_blank" className="hover:text-red-600 text-lg">My Github</a></li>
            <li><a href="#" className="hover:text-red-600 text-lg">Location</a></li>
          </ul>
        </div>

        {/* 3rd Section: info links */}
        <div className="col-span-1 py-8 md:py-0">
          <h2 className="text-xl font-semibold mb-3">Info</h2>
          <ul className="flex flex-col gap-y-3">
            <li><a href="#" className="hover:text-red-600 text-lg">Contact me</a></li>
            <li><a href="#" className="hover:text-red-600 text-lg">Careers</a></li>
            <li><a href="#" className="hover:text-red-600 text-lg">FAQ</a></li>
            <li><a href="#" className="hover:text-red-600 text-lg">Terms of use</a></li>
          </ul>
        </div>

        {/* 4th Section: contact information */}
        <div className="col-span-1 py-8 md:py-0">
          <h2 className="text-xl font-semibold mb-3">Hire me</h2>
          {/* Contact details with corresponding icons */}
          <ul className="flex flex-col gap-y-3">
            <li>
              <span className="flex items-center">
                <IoMail className="text-white text-xl mr-4" />
                <p className="text-lg">nicolemisuraca@outlook.com</p>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <IoCall className="text-white text-xl mr-4" />
                <p className="text-lg">+39 3343915430</p>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <IoLogoLinkedin className="text-white text-xl mr-4" />
                <p className="text-lg">Linkedin: Nicole Misuraca</p>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <IoLogoGithub className="text-white text-xl mr-4" />
                <p className="text-lg">Vercel and Github: niczeta</p>
              </span>
            </li>
            <li>
              <span className="flex items-center">
                <IoLocationSharp className="text-white text-xl mr-4" />
                <p className="text-lg">Italy, Rome (RM)</p>
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};