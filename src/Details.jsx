

export default function Details( { link, color, text } ) {

    return (
        <a
          href={link}
          className={`h-[100vh] group w-full ${color} relative`}
        >
          <div className="flex items-center text-center justify-center font-semibold w-full h-full bg-gray-100/90 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {text}
          </div>
        </a>
    )
}