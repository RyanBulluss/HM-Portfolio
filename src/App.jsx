import { Routes, Route  } from "react-router-dom";
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
        <Route path="/HM-Portfolio/" element={<Work />} />
        <Route path="/HM-Portfolio/about" element={<About />} />
        <Route path="/HM-Portfolio/contact" element={<Contact />} />
        <Route path="/HM-Portfolio/illusion" element={<Illusion />} />
        <Route path="/HM-Portfolio/prevent-type-2" element={<Prevent />} />
        <Route path="/HM-Portfolio/dogs-in-shelters" element={<Shelters />} />
        <Route path="/HM-Portfolio/shy-fx" element={<Shy />} />
        <Route path="/HM-Portfolio/reda" element={<Reda />} />
        <Route path="/HM-Portfolio/argyll-covenant" element={<Argyll />} />
        <Route path="/HM-Portfolio/omega-diagnostics" element={<Omega />} />
        <Route path="/HM-Portfolio/binary-botanical" element={<Binary />} />
      </Routes>
      <div
      onClick={scrollToTop}
      className="fixed bg-gray-300/60 text-xl z-40 bottom-5 right-5 p-4 hover:cursor-pointer text-gray-600 hover:text-gray-100 hover:bg-black duration-300 rounded-full">
        <FaChevronUp />
      </div>
    </div>
  );
}
