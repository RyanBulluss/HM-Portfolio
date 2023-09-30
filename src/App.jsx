import { Routes, Route } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import Work from "./Work";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";

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
      </Routes>
      <button
      onClick={scrollToTop}
      className="fixed bg-gray-300/60 text-xl z-40 bottom-5 right-5 p-4 text-gray-600 hover:text-gray-100 hover:bg-black duration-300 rounded-full">
        <FaChevronUp />
      </button>
    </div>
  );
}
