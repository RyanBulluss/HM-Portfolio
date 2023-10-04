import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-[800px] flex flex-col items-center gap-8  md:gap-16 px-4 mx-auto my-[40px]">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl md:mt-4 font-semibold">ABOUT ME</h1>

      <h2 className="w-full font-semibold text-xl md:text-4xl mt-16">HANORAH MURPHY</h2>

      <div className="text-sm md:text-lg">
        <p>
          Hi, I'm Hanorah, I’m an undergraduate Graphic Communication Student
          and will be graduating this coming summer. Alongside my studies I run
          my own freelance design studio. I am a goal-driven graphic design
          artist, with a passion for design. I am successful at applying
          technical skills to create pieces that informs and engages. During the
          summer between second and third year, I completed an internship at
          ClearBrand where I designed and prototyped a website following a
          rebranding. Additionally I created an introduction animation for
          Reading Borough council. Both of which can be found within my
          portfolio. I am invested in all aspects of design but, especially
          passionate about visual design, and interactive design however, I am
          constantly exploring to widen my knowledge within design practices. I
          have a can do attitude and feel every piece of work is an opportunity
          to learn and further my knowledge.
        </p>
        <br />
        <p>
          Alongside this I have carried out a range of different projects at
          University. Which pushed my understanding of the Adobe Creative Suite,
          with a great experience in Photoshop, Illustrator, Indesign and XD. I
          have developed knowledge and understanding towards the theory of
          graphic design as well. Understanding typographic and layout
          principles and contemporary print production processes.​​​​​​​{" "}
        </p>
      </div>

      <Link className="bg-black hover:bg-black/70 duration-300 text-white font-bold rounded-full py-2 px-6" to="/">
        View my work
      </Link>

      <div className="flex justify-center text-xl p-2 items-center gap-6">
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
  );
}
