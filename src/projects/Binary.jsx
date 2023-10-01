import { useState } from "react";
import image1 from "../images/binary-1.png";
import image2 from "../images/binary-2.png";
import image3 from "../images/binary-3.png";
import image4 from "../images/binary-4.png";
import image5 from "../images/binary-5.png";
import image6 from "../images/binary-6.png";
import image7 from "../images/binary-7.png";
import SmallDetails from "../SmallDetails";
import ViewImage from "../ViewImage";


export default function Binary() {
    const [image, setImage] = useState(false);

    const images = [image1, image2, image3, image4, image5, image6, image7]

  return (
    <div className="max-w-[1400px] mx-auto text-center">
        {image &&  <ViewImage image={image} setImage={setImage} />}
     
      <div className="max-w-[750px] mx-auto p-6 sm:p-8 flex flex-col gap-4">
        <h1 className="text-center sm:text-2xl md:mt-4 font-semibold">
          BINARY BOTANICAL COMPETITION WINNER
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Binary Botanical is the award winning “wine lovers’ beer”. Which is
          vegan friendly and gluten free.
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          To promote their product, Binary teamed up with Sainsbury’s to offer
          the opportunity to for designers to come up with a design concept that
          would attract potential customers to the new product. The winner's
          design was then spray painted outside 70 Sainsbury’s across the UK.
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          Below you will find some photographs off the street art coming to
          life, along with my design entires. I am proud of winning this
          competition and having the opportunity to work alongside Sainsbury's
          and Binary as this was my first piece of work showcased outside of the
          educational environment.
        </p>
      </div>
      <img src={image1} alt="Certificate" onClick={() => setImage(image1)} className="hover:cursor-zoom-in" />
      <div className="max-w-[750px] mx-auto p-6 sm:p-8">
        <p className="text-sm md:text-lg text-gray-800">
          The brief stated it wanted a two colour design based upon the brand
          guidlines, made up of two silhouette layers. Which can be easily
          mocked up as templates for the street art. As the brands tagline is 'a
          wine-lovers beer' I wanted too represent this within the design by
          illustrating wine through the imagery of the glass and the pour. I
          decided to use leaves and stems to bring in some of their own branding
          through the imagery.
        </p>
      </div>
      <div className="flex flex-col gap-4 max-w-[1080px] mx-auto">
        <img src={image2} alt="Logo" onClick={() => setImage(image2)} className="hover:cursor-zoom-in" />
        <img src={image3} alt="Logo" onClick={() => setImage(image3)} className="hover:cursor-zoom-in" />
      </div>
      <div className="max-w-[750px] mx-auto p-6 sm:p-8">
        <p className="text-sm md:text-lg text-gray-800">
          Below shows some photographs of the design outside of one of the
          Sainsbury's. As this was the first design put down, I went along to
          help spray paint it.
        </p>
      </div>
      <div className="grid grid-cols-4">
        <img src={image4} className="p-1 hover:cursor-zoom-in" alt="image" onClick={() => setImage(image4)} />
        <img src={image5} className="p-1 hover:cursor-zoom-in" alt="image" onClick={() => setImage(image5)}  />
        <img src={image6} className="p-1 hover:cursor-zoom-in" alt="image" onClick={() => setImage(image6)} />
        <img src={image7} className="p-1 hover:cursor-zoom-in" alt="image" onClick={() => setImage(image7)} />
      </div>
      <div className="my-8">
        <SmallDetails />
      </div>
    </div>
  );
}
