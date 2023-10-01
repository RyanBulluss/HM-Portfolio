import { Link } from "react-router-dom";
import illusion from "./images/illusion.png";
import prevent from "./images/prevent-type.png";
import shelters from "./images/dog-shelter.png";
import shy from "./images/shy.png";

export default function SmallDetails() {
  const projects = [
    {
      text: "Illusion",
      image: illusion,
      link: "/HM-Portfolio/illusion",
    },
    {
      text: "Prevent Type 2",
      image: prevent,
      link: "/HM-Portfolio/prevent-type-2",
    },
    {
      text: "A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS",
      image: shelters,
      link: "/HM-Portfolio/dogs-in-shelters",
    },
    {
      text: "SHY FX ESSENTIAL ALBUM",
      image: shy,
      link: "/HM-Portfolio/shy-fx",
    },
  ];

  return (
    <div className="">
      <h3 className="font-bold text-left text-sm sm:text-lg  ml-4 mb-4">YOU MAY ALSO LIKE</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {projects.map((project, idx) => (
          <Link to={project.link} className={`group w-full relative ${idx < 2 ? 'block' : 'hidden'}  ${idx < 4 ? 'md:block' : ''}`} key={idx}>
            <img
              src={project.image}
              className="z-0 h-full w-full"
              alt="screenshot"
            />
            <div className="flex text-xs absolute top-0 left-0 z-20 items-center text-center justify-center font-semibold w-full h-full bg-gray-100/[95%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {project.text}
            </div>
          </Link>
        ))}
      </div>



    </div>
  );
}
