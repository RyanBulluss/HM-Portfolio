import { Link } from "react-router-dom"

export default function Details( { link, text, image } ) {

    return (
      <Link
      to={link}
      className={`group w-full relative`}
    >
      <img className="z-0 h-full w-full" src={image} alt="screenshot" />
      <div className="flex absolute top-0 p-8 left-0 z-20 items-center text-center justify-center font-semibold w-full h-full bg-gray-100/[95%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {text}
      </div>
    </Link>
    )
}