

export default function Details( { link, color, text, image } ) {

    return (
      <a
      href={link}
      className={`group w-full relative`} // Add relative class here
    >
      <img className="z-0 h-full w-full" src={image} alt="screenshot" />
      <div className="flex absolute top-0 left-0 z-20 items-center text-center justify-center font-semibold w-full h-full bg-gray-100/[95%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {text}
      </div>
    </a>
    )
}