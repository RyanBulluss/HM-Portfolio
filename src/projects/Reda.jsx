import { useState } from "react";
import ViewImage from "../ViewImage";
import image1 from "../images/reda/reda-1.png";
import image2 from "../images/reda/reda-2.png";
import image3 from "../images/reda/reda-3.png";
import image4 from "../images/reda/reda-4.png";
import image5 from "../images/reda/reda-5.png";
import image6 from "../images/reda/reda-6.png";
import image7 from "../images/reda/reda-7.png";
import image8 from "../images/reda/reda-8.png";
import image9 from "../images/reda/reda-9.png";
import image10 from "../images/reda/reda-10.png";
import image11 from "../images/reda/reda-11.png";
import image12 from "../images/reda/reda-12.png";
import image13 from "../images/reda/reda-13.png";
import SmallDetails from "../SmallDetails";
import YouTube from "react-youtube";

export default function Reda() {
  const [image, setImage] = useState(false);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div className="max-w-[1400px] mx-auto xs:p-4 text-center">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <div className="max-w-[750px] mx-auto mb-4 p-6 sm:px-0 sm:py-8 flex flex-col gap-4">
        <h1 className="text-center text-2xl sm:text-3xl md:mt-4 font-bold">REDA</h1>
        <br />
        <p className="text-sm md:text-lg text-gray-600">
          Reading’s Economy and Destination Agency (REDA) a marketing
          organisation for Reading to represent the town as a great place to
          work, do business, live and visit. REDA Is an example of a client
          project I worked on during my Internship at ClearBrand. My input for
          this project was to design illustrations to be used for an
          introduction animation to be used to show their rebranding. I designed
          and put together the keyframes in Adobe Illustrator, which once
          finalised was sent to an animator within the agency.
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          The client wanted the keyframes to be simple with lots of clear space
          around the edges, whilst conveying the message of representing Reading
          as an attractive place to work, do business, and live and visit. I
          included illustrations of imagery that would could be recognised and
          identified as Reading, for example: the lion in Forbury Gardens,
          Reading Station and The Blade.
        </p>
      </div>
      <img src={image1} alt="" onClick={() => setImage(1)} className="hover:cursor-zoom-in" />
      <div className="max-w-[750px] mx-auto p-6 sm:px-0 sm:py-12 flex flex-col gap-4">
        <p className="text-sm md:text-lg">
          The keyframes below were not the final keyframes for the animation,
          but they were further worked upon and developed by another designer
          within the agency.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img
          src={image2}
          alt=""
          onClick={() => setImage(2)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image3}
          alt=""
          onClick={() => setImage(3)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image4}
          alt=""
          onClick={() => setImage(4)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image5}
          alt=""
          onClick={() => setImage(5)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image6}
          alt=""
          onClick={() => setImage(6)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image7}
          alt=""
          onClick={() => setImage(7)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image8}
          alt=""
          onClick={() => setImage(8)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image9}
          alt=""
          onClick={() => setImage(9)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image10}
          alt=""
          onClick={() => setImage(10)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image11}
          alt=""
          onClick={() => setImage(11)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image12}
          alt=""
          onClick={() => setImage(12)}
          className="hover:cursor-zoom-in"
        />
        <img
          src={image13}
          alt=""
          onClick={() => setImage(13)}
          className="hover:cursor-zoom-in"
        />
      </div>
      <div className="max-w-[750px] mx-auto p-6 sm:px-0 sm:py-8 flex flex-col gap-4">
        <p className="text-sm md:text-lg">
          Below is the final introduction animation live on the REDA website
          (https://www.visit-reading.com/business/about-us) I did not create the
          animation however it does show my illustrations I designed and sent
          over the the animator.
        </p>
      </div>
      <div className="flex justify-center pt-4 pb-16">

      <YouTube videoId={'XhNOtpkakOM'} className="sm:hidden" opts={{
        height: '169px',
        width: '300px',
        playerVars: {
          // You can add additional player parameters here (e.g., autoplay, controls, etc.)
          autoplay: 0, // 0 or 1
        }
      }} />
      <YouTube videoId={'XhNOtpkakOM'} className="hidden sm:block " opts={{
        height: '337px',
        width: '600px',
        playerVars: {
          // You can add additional player parameters here (e.g., autoplay, controls, etc.)
          autoplay: 0, // 0 or 1
        }
      }} />
      </div>
      <SmallDetails />
    </div>
  );
}
