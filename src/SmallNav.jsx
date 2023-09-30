import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SmallNav({ showNav, setShowNav }) {
  const location = useLocation();
  return (
    <div
      className="bg-white fixed w-[100%] h-[100%] flex flex-col top-0 left-0 z-40"
      onClick={() => setShowNav(!showNav)}
    >
      <div className="h-[120px] flex text-2xl justify-end items-center mx-8 md:mx-[3%]">
        <button className="mb-4">
          <FaTimes />
        </button>
      </div>

      <div className="h-full flex flex-col items-center justify-center gap-4 flex-grow lg:gap-6 text-2xl">
        <Link
          to="/HM-Portfolio/about"
          className={`p-3 ${location.pathname === "/HM-Portfolio/about" ? "font-semibold" : ""}`}
        >
          ABOUT ME
        </Link>
        <Link
          to="/HM-Portfolio/"
          className={`p-3 ${location.pathname === "/HM-Portfolio/" ? "font-semibold" : ""}`}
        >
          WORK
        </Link>
        <Link
          to="/HM-Portfolio/contact"
          className={`p-3 ${
            location.pathname === "/HM-Portfolio/contact" ? "font-semibold" : ""
          }`}
        >
          CONTACT
        </Link>
      </div>

      <div className="h-[120px] flex justify-center border-t items-center gap-8">
      <div className="flex justify-center items-center text-2xl mr-2 gap-6">
        <a href="http://linkedin.com/in/hanorah-murphy" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/hanorahs.studio/" target="_blank">
          <FaInstagram />
        </a>
        <a href="mailto:Hanorahs.studio@gmail.com" target="_blank">
          <FaEnvelope />
        </a>
      </div>
      </div>
    </div>
  );
}
