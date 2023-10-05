import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-[800px] flex flex-col items-center gap-8  md:gap-16 px-4 mx-auto my-[40px]">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl md:mt-4 font-semibold">
        ABOUT ME
      </h1>

      <h2 className="w-full font-semibold text-xl md:text-4xl mt-16">
        HANORAH MURPHY
      </h2>

      <div className="text-sm md:text-lg">
        <p>
          Hi, I'm Hanorah, I am a First Class Graphic Communication Graduate
          from the University of Reading.
        </p>
        <br />
        <p>
          I am a goal-driven graphic designer, with a passion for design. I am
          successful at applying technical skills to create pieces that informs
          and engages.
        </p>
        <br />
        <p>
          I have recently started my first role as a Graphic Design Graduate at
          Sky Creative.
        </p>
      </div>

      <Link
        className="bg-black hover:bg-black/70 duration-300 text-white font-bold rounded-full py-2 px-6"
        to="/"
      >
        View my work
      </Link>

      <div className="flex justify-center text-xl p-2 items-center gap-6">
        <a
          href="http://linkedin.com/in/hanorah-murphy"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/hanorahs.studio/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:Hanorahs.studio@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
