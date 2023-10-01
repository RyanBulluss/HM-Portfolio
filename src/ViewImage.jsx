import { FaTimes } from "react-icons/fa";

export default function ViewImage( {image, setImage} ) {
  return (
    <div className="bg-white/90 fixed w-[100%] h-[100%] flex flex-col justify-center items-center top-0 left-0 z-50">
        <button
        onClick={() => setImage(false)}
        className="text-xl absolute top-10 right-8">
            <FaTimes />
        </button>
        <img src={image} alt="image" />
    </div>
  );
}
