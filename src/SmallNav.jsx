import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SmallNav({ showNav, setShowNav }) {
  const location = useLocation();
  return (
    <div
      className="bg-white fixed w-[100%] h-[100%] flex flex-col top-0 left-0 z-50"
      onClick={() => setShowNav(!showNav)}
    >
      <div className="h-[120px] flex text-2xl justify-end items-center mx-8 md:mx-[3%]">
        <div className="mt-1 cursor-pointer">
          <FaTimes />
        </div>
      </div>

      <div className="h-full flex flex-col items-center justify-center gap-4 flex-grow lg:gap-6 text-2xl">
        <Link
          to="/about"
          className={`p-3 ${location.pathname === "/about" ? "font-semibold" : ""}`}
        >
          ABOUT ME
        </Link>
        <Link
          to="/"
          className={`p-3 ${location.pathname === "/" ? "font-semibold" : ""}`}
        >
          WORK
        </Link>
        <Link
          to="/contact"
          className={`p-3 ${
            location.pathname === "/contact" ? "font-semibold" : ""
          }`}
        >
          CONTACT
        </Link>
      </div>

      <div className="h-[120px] flex justify-center border-t items-center gap-8">
      <div className="flex justify-center items-center text-2xl mr-2 gap-6">
        <a href="http://linkedin.com/in/hanorah-murphy" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/hanorahs.studio/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:Hanorahs.studio@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
      </div>
      </div>
    </div>
  );
}
