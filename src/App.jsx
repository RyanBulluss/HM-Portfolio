import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import Work from "./Work";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Argyll from "./projects/Argyll";
import Binary from "./projects/Binary";
import Illusion from "./projects/Illusion";
import Omega from "./projects/Omega";
import Prevent from "./projects/Prevent";
import Reda from "./projects/Reda";
import Shelters from "./projects/Shelters";
import Shy from "./projects/Shy";



export default function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[100vh]">
      <Nav />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/illusion" element={<Illusion />} />
        <Route path="/prevent-type-2" element={<Prevent />} />
        <Route path="/dogs-in-shelters" element={<Shelters />} />
        <Route path="/shy-fx" element={<Shy />} />
        <Route path="/reda" element={<Reda />} />
        <Route path="/argyll-covenant" element={<Argyll />} />
        <Route path="/omega-diagnostics" element={<Omega />} />
        <Route path="/binary-botanical" element={<Binary />} />
      </Routes>
      <div
      onClick={scrollToTop}
      className="fixed bg-gray-300/60 text-xl z-40 bottom-5 right-5 p-4 hover:cursor-pointer text-gray-600 hover:text-gray-100 hover:bg-black duration-300 rounded-full">
        <FaChevronUp />
      </div>
      <div className="h-36"></div>
    </div>
  );
}
