import { Routes, Route } from "react-router-dom";
import Work from "./Work";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="min-h-[100vh]">
      <Nav />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
