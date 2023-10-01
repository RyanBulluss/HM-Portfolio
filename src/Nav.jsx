import { useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SmallNav from "./SmallNav";
import logo from './images/logo.png'

export default function Nav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false); 

  return (
    <div className="h-[120px] flex justify-between items-center mx-8 md:mx-[3%]">
        {showNav && <SmallNav showNav={showNav} setShowNav={setShowNav} /> }
      <div className="w-1/3 h-full hidden md:flex items-center gap-4 lg:gap-6 text-md">
        <Link
          to="/HM-Portfolio/about"
          className={`${location.pathname === "/HM-Portfolio/about" ? "font-semibold" : ""}`}
        >
          ABOUT ME
        </Link>
        <Link
          to="/HM-Portfolio/"
          className={`${location.pathname === "/HM-Portfolio/" ? "font-semibold" : ""}`}
        >
          WORK
        </Link>
        <Link
          to="/HM-Portfolio/contact"
          className={`${
            location.pathname === "/HM-Portfolio/contact" ? "font-semibold" : ""
          }`}
        >
          CONTACT
        </Link>
      </div>
      <div className="md:w-1/3 h-full flex unselectable items-center justify-center">
        <Link to="/HM-Portfolio/">
          <img
            className="h-[60px] md:h-[120px] md:ml-3"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-1/3 h-full hidden md:flex justify-end items-center mr-2 gap-6">
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
      { !showNav && <div className="block md:hidden text-2xl mb-4 hover:cursor-pointer"
      onClick={() => setShowNav(!showNav)}>
        <FaBars />
      </div>
      }
      
    </div>
  );
}
