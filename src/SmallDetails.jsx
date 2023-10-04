import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import prevent from "./images/prevent-type.png";
import illusion from "./images/illusion.png";
import shelter from "./images/dog-shelter.png";
import shy from "./images/shy.png";
import reda from "./images/reda.png";
import argyll from "./images/argyll.png";
import omega from "./images/omega.png";
import binary from "./images/binary.png";

export default function SmallDetails() {
  const location = useLocation();
  const [projects, setProjects] = useState([])



  useEffect(() => {
    let allProjects = [
      {
        text: "Illusion",
        image: illusion,
        link: "/illusion",
      },
      {
        text: "Prevent Type 2",
        image: prevent,
        link: "/prevent-type-2",
      },
      {
        text: "A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS",
        image: shelter,
        link: "/dogs-in-shelters",
      },
      {
        text: "SHY FX ESSENTIAL ALBUM",
        image: shy,
        link: "/shy-fx",
      },
      {
        text: "REDA",
        image: reda,
        link: "/reda",
      },
      {
        text: "ARGYLL COVENANT",
        image: argyll,
        link: "/argyll-covenant",
      },
      {
        text: "OMEGA DIAGNOSTICS",
        image: omega,
        link: "/omega-diagnostics",
      },
      {
        text: "BINARY BOTANICAL COMPETITION WINNER",
        image: binary,
        link: "/binary-botanical",
      },
    ];
    allProjects = allProjects.filter((p) => p.link !== location.pathname)
    for (let i = 0; i < allProjects.length - 4; i++) {
      let rand = Math.floor(Math.random() * allProjects.length + 1)
      allProjects.splice(rand, 1);
    }
    console.log(location.pathname)
    setProjects(allProjects)
  }, [location.pathname])

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
            <div className="flex text-xs absolute top-0 p-2 left-0 z-20 items-center text-center justify-center font-semibold w-full h-full bg-gray-100/[95%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {project.text}
            </div>
          </Link>
        ))}
      </div>



    </div>
  );
}
