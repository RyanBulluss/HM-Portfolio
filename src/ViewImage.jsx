import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ViewImage( {image, setImage, images} ) {

  function nextImage() {
    if (image + 1 > images.length) {
      setImage(1);
    } else {
      setImage(image + 1);
    }
  }

  function lastImage() {
    if (image - 2 < 0) {
      setImage(images.length);
    } else {
      setImage(image - 1);
    }
  }


  return (
    <div className="bg-white/90 fixed w-[100%] h-[100%] flex flex-col justify-center items-center top-0 left-0 z-50">
        <div
        onClick={() => setImage(false)}
        className="text-xl absolute top-10 right-8 hover:cursor-pointer">
            <FaTimes />
        </div>
        <div onClick={lastImage} 
        className="absolute left-0 z-60 h-[70%] w-[20%] group flex items-center">
          <div className="hover:bg-gray-300 bg-gray-300/70 hidden group-hover:block hover:cursor-pointer text-4xl p-4 m-4 rounded-full">
            <FaChevronLeft />
          </div>
        </div>
        <div onClick={nextImage}
        className="absolute right-0 z-60 h-[70%] w-[20%] group flex items-center justify-end">
          <div className="hover:bg-gray-300 bg-gray-300/70 hidden group-hover:block hover:cursor-pointer text-4xl p-4 m-4 rounded-full">
            <FaChevronRight />
          </div>
        </div>
        <img src={images[image - 1]} alt="image" className="unselectable" />
    </div>
  );
}
