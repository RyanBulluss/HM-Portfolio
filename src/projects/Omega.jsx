import { useState } from "react";
import image1 from "../images/omega-1.png";
import image2 from "../images/omega-2.png";
import image3 from "../images/omega-3.png";
import image4 from "../images/omega-4.png";
import SmallDetails from "../SmallDetails";
import ViewImage from "../ViewImage";

export default function Omega() {
  const [image, setImage] = useState(false);

  const images = [image1, image2, image3, image4];
  return (
    <div className="max-w-[1400px] mx-auto text-center sm:p-4">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <div className="max-w-[750px] mx-auto p-6 sm:px-0 sm:py-8 mb-8 flex flex-col gap-6">
        <h1 className="text-center sm:text-2xl md:mt-4 font-semibold">
          OMEGA DIAGNOSTICS
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Omega Diagnostics is an international diagnostic testing business that
          is a client of ClearBrand. They needed a new exhibition booth, which I
          assisted on during my internship at ClearBrand. I design two options
          of a 9 panel board which could be printed and ready. Below are my two
          design options I produced for the client, along with an illustration
          of an average person standing next to the board.
        </p>
      </div>
      <img
        src={image1}
        alt="image"
        onClick={() => setImage(1)}
        className="hover:cursor-zoom-in"
      />
      <div className="max-w-[750px] mx-auto p-6 sm:px-0 sm:py-8 flex flex-col gap-6">
        <p className="text-sm md:text-lg">
          I produced the image above for the client to gage the size of the
          board once printed. The board stands at 3 meters high, with the
          illustration of the people standing at 1.7 meters high. This not only
          helped the client but also helped me decided where to position
          information on the board to make sure important information was at eye
          level.
        </p>
      </div>
      <img
        src={image2}
        alt="image"
        onClick={() => setImage(2)}
        className="hover:cursor-zoom-in"
      />
      <div className="max-w-[750px] mx-auto p-6 sm:px-0 sm:py-8 flex flex-col gap-6">
        <p className="text-sm md:text-lg">
          Below are the two options I provided for the client. All information
          and imagery was provided by the client, my job was to size it
          correctly and position everything in the best way possible.
        </p>
      </div>
      <img
        src={image3}
        alt="image"
        onClick={() => setImage(3)}
        className="hover:cursor-zoom-in"
      />
      <img
        src={image4}
        alt="image"
        onClick={() => setImage(4)}
        className="hover:cursor-zoom-in"
      />
      <div className="my-16">
        <SmallDetails />
      </div>
    </div>
  );
}
