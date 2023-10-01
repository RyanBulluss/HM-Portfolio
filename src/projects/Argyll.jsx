import { useState } from "react";
import image1 from "../images/argyll/argyll-1.png";
import image2 from "../images/argyll/argyll-2.png";
import image3 from "../images/argyll/argyll-3.png";
import image4 from "../images/argyll/argyll-4.png";
import image5 from "../images/argyll/argyll-5.png";
import image6 from "../images/argyll/argyll-6.png";
import image7 from "../images/argyll/argyll-7.png";
import image8 from "../images/argyll/argyll-8.png";
import image9 from "../images/argyll/argyll-9.png";
import image10 from "../images/argyll/argyll-10.png";
import ViewImage from "../ViewImage";
import SmallDetails from "../SmallDetails";

export default function Argyll() {
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
  ];

  return (
    <div className="max-w-[1400px] mx-auto xs:p-4 text-center">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <div className="max-w-[750px] mx-auto p-6 sm:p-8 flex flex-col gap-6">
        <h1 className="text-center sm:text-2xl md:mt-4 font-semibold">
          ARGYLL COVENANT
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Argyll Covenant, a specialist employer covenant advice, is an example
          of a client project I worked on during my Internship at ClearBrand.
          For this client I helped redesign their website and put together a
          clickable prototype on Invision. I initially designed each page on
          Adobe illustrator ready to send to the developer within the agency.
          JPEGS of these can be viewed below, with more details of the process.
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          I also assisted on redesigning their logo by designing 2 finial
          development options of the new redesigned logo, which can be viewed
          below.
        </p>
      </div>
      <div className="max-w-[750px] mx-auto p-6 sm:p-8 flex flex-col gap-6">
        <p className="text-sm md:text-lg">
          For feedback from the client, I designed a clickable prototype to test
          and determine its fit and durability but to also identify
          improvements. Whilst providing an easy to navigate example of the
          process for the clients to provide feedback. Which can be viewed below
          and clicked through.
        </p>
        <p className="text-sm md:text-lg">
          I have attached a link to the live website at the bottom, to be able
          to see how my design decisions were used for the final site.
        </p>
      </div>
      <div className="my-6">
        <a href="https://invis.io/FN12SIBCTR6Y" target="_blank" rel="noreferrer"
        className="bg-orange-400 text-white font-bold py-2 px-6 rounded-full hover:cursor-pointer hover:bg-orange-600">
          Clickable Prototype
        </a>
      </div>
      <img src={image1} alt="" onClick={() => setImage(1)} className="hover:cursor-zoom-in" />
      <div className="max-w-[750px] mx-auto p-6 sm:p-8 flex flex-col gap-6">
        <p className="text-sm md:text-lg">
          During the internship I also contributed to the redesigning of the
          logo for the client. The logo that can be seen being used for the web
          design was the initial redesigned logo done by the agency. Which
          during the course the project developed to the 'original' design
          concept seen below which was quickly put together during a meeting
          with the client.
        </p>
        <p className="text-sm md:text-lg">
          Option 1 & 2 were concepts that I put together on Adobe Illustrator to
          be sent to the client for feedback. The shapes and opacities within
          the logo were created by overlapping circles with gradients inside.
          The client preferred option 2 out of the couple.
        </p>
      </div>
      <img src={image2} alt="" onClick={() => setImage(2)} className="hover:cursor-zoom-in" />
      <div className="max-w-[750px] mx-auto p-6 sm:p-8 flex flex-col gap-6">
        <p className="text-sm md:text-lg">
          The client wanted to redesign their current website, to create a more
          modern business message to their site, that would welcome in new
          clients. Whilst keeping It simple and easy to navigate. Whilst
          following the new brand guidelines also revised by the agency. Each
          page needed to follow the brand guidelines in terms of colour and
          typography whilst each being individual in terms of layout, to keep
          the audience engaged. The inclusion of orange buttons were designed to
          provide easy navigation, whilst adding a bit of colour and contrast on
          the page.
        </p>
      </div>
      <div className="flex w-full gap-[1%] my-6">
        <img src={image3} className="w-[44%] hover:cursor-zoom-in" alt="" onClick={() => setImage(3)} />
        <img src={image4} className="w-[55%] hover:cursor-zoom-in" alt="" onClick={() => setImage(4)} />
      </div>
      <div className="flex w-full gap-[1%] my-6">
        <img src={image5} className="w-[49%] hover:cursor-zoom-in" alt="" onClick={() => setImage(5)} />
        <img src={image6} className="w-[50%] hover:cursor-zoom-in" alt="" onClick={() => setImage(6)} />
      </div>
      <div className="flex w-full gap-[1%] my-6">
        <img src={image7} className="w-[49%] hover:cursor-zoom-in" alt="" onClick={() => setImage(7)} />
        <img src={image8} className="w-[50%] hover:cursor-zoom-in" alt="" onClick={() => setImage(8)} />
      </div>
      <div className="flex w-full gap-[1%] my-6">
        <img src={image9} className="w-[40%] hover:cursor-zoom-in" alt="" onClick={() => setImage(9)} />
        <img src={image10} className="w-[59%] hover:cursor-zoom-in" alt="" onClick={() => setImage(10)} />
      </div>
      <div className="my-12">
        <a href="https://www.argyllcovenant.com" target="_blank" rel="noreferrer"
        className="bg-orange-400 text-white font-bold py-2 px-6 rounded-full hover:cursor-pointer hover:bg-orange-600">
          Live Website
        </a>
      </div>
      <div className="my-24">
        <SmallDetails />
      </div>
    </div>
  );
}
