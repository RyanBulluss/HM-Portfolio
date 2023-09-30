import { useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SmallNav from "./SmallNav";

export default function Nav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false); 

  return (
    <div className="h-[120px] flex justify-between items-center mx-8 md:mx-[3%]">
        {showNav && <SmallNav showNav={showNav} setShowNav={setShowNav} /> }
      <div className="w-1/3 h-full hidden md:flex items-center gap-4 lg:gap-6 text-md">
        <Link
          to="/about"
          className={`${location.pathname === "/about" ? "font-semibold" : ""}`}
        >
          ABOUT ME
        </Link>
        <Link
          to="/"
          className={`${location.pathname === "/" ? "font-semibold" : ""}`}
        >
          WORK
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "font-semibold" : ""
          }`}
        >
          CONTACT
        </Link>
      </div>
      <div className="md:w-1/3 h-full flex items-center justify-center">
        <Link to="/">
          <img
            className="h-[60px] md:h-[120px] md:ml-3"
            src="https://cdn.myportfolio.com/8602d74a-2f44-4984-98f4-1d6af02cd812/4b91dff5-29fb-4355-840e-cac932466a0b_rwc_582x554x1222x1222x4096.png?h=0e948e7ce62efc06da04e5ad56401be1"
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
      { !showNav && <button className="block md:hidden text-2xl mb-4"
      onClick={() => setShowNav(!showNav)}>
        <FaBars />
      </button>
      }
      
    </div>
  );
}
