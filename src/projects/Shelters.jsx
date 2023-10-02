import { useState } from "react";
import SmallDetails from "../SmallDetails";
import ViewImage from "../ViewImage";
import image1 from "../images/shelters/shelters-1.png";
import image2 from "../images/shelters/shelters-2.png";
import image3 from "../images/shelters/shelters-3.png";
import image4 from "../images/shelters/shelters-4.png";
import image5 from "../images/shelters/shelters-5.png";
import image6 from "../images/shelters/shelters-6.png";
import image7 from "../images/shelters/shelters-7.png";

export default function Shelters() {
  const [image, setImage] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="max-w-[1400px] mx-auto sm:p-4">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <h1 className="text-center sm:text-2xl md:mt-4 py-[26px] font-bold">
        A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS
      </h1>
      <h4 className="text-center text-gray-500">Editorial design</h4>
      <div className="max-w-[800px] mx-auto my-12 p-4 sm:px-0">
        <h1 className="sm:text-2xl md:mt-4 font-semibold">Module brief </h1>
        <br />
        <p className="text-sm md:text-lg text-gray-600">
          The project brief was to develop an awareness ‘of the relationship
          between word and images in graphic communication’. By considering the
          visual compositional relationship between the two elements and seeing
          what message is created when these two elements are combined or
          separated. The designed outcome for this was already decided and was
          to be a booklet with set dimensions. The topic or theme was open to
          interpretation, of which I was able to choose. Although, it was made
          clear that it was important to select the images and text
          appropriately to deliver the successful composition.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img
          src={image1}
          alt=""
          onClick={() => setImage(1)}
          className="hover:cursor-zoom-in"
        />
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
      </div>
      <div className="flex flex-wrap py-8">
        <div className="w-full sm:w-[49%]">
          <img
            src={image4}
            alt=""
            onClick={() => setImage(4)}
            className="hover:cursor-zoom-in"
          />
        </div>
        <div className="w-full sm:w-[51%]">
          <div className="p-4 sm:p-0">
            <h2 className="sm:text-xl md:mt-4 pb-[20px] font-bold">
              Choosing a topic
            </h2>
            <p className="text-sm sm:text-base">
              Initially the brief, alongside example work we were shown, brought
              out lots of ideas for topics and themes that I could focus on.
              Some of my initial ideas were:
            </p>
            <br />
            <ul className="list-disc ml-5 text-sm sm:text-base">
              <li>
                Dogs are not just for Christmas (rescue kennels, puppies don’t
                stay puppies, focusing on bully breads).
              </li>
              <br />
              <li>Sexual assault – Stigma around it.</li>
              <br />
              <li>Horses – about riding and history behind them.</li>
              <br />
              <li>Banksy.</li>
              <br />
              <li>Animals dying out.</li>
              <br />
            </ul>
            <p className="text-sm sm:text-base">
              I chose to focus on the topic of dogs in kennels and the sadness
              surrounding it, as, I have always had dogs as a pet and most of
              the time they come from a rescue home. Therefore, I have
              first-hand experience of seeing the trauma and aftermath of the
              impact it has on a dog being abandoned. Which brought me to my
              title: A Dose of Reality What Happens to Dogs in Shelters.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              I chose to focus on dogs in kennels, as many kennels are full to
              the brim with dogs at the moment due to recent knock-on effect of
              ‘lockdown puppies’. As people bought these puppies when at home in
              lockdown, and now back to everyday life are stuck with dogs that
              have not be socialised or trained to be left alone. But even
              before Covid, dogs being abandoned and handed over to kennels have
              been an issue for a while.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              ‘A Dogs is for life, not just for Christmas’ is a well-known
              slogan by Dogs Trust UK. The slogan has meaning and is impactful
              and was the starting point for my topic. I wanted to design a
              wakeup call for people to release that dogs are not just gifts and
              are a lift time commitment.
            </p>
            <br />
            <p className="text-sm sm:text-base font-semibold">
              I started by examining a pieces that have combined words and
              images based upon similar topics to mine, to broaden my knowledge,
              but also to get inspiration for my own design.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[2%] py-8">
        <div className="w-full sm:w-[49%]">
          <div className="p-4 sm:p-0">
            <h2 className="sm:text-xl md:mt-4 pb-[20px] font-bold">
              Design process
            </h2>
            <p className="text-sm sm:text-base">
              I decided to analysis ’A Dose of Reality: What Happens to Dogs in
              Shelters’ sourced from Akita Rescue, as it had the most themes and
              communicate the message of the booklet, showing the effects and
              trauma of people dumping their dogs.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              I focused on the key themes of sadness, pain, excuses, statistics,
              and impactful statements across both pieces of text. I extracted
              these main themes from both pieces and combined them together to
              create a shorter but more impactful piece of text.
            </p>
            <br />
            <p className="text-sm sm:text-base">
              <span className="font-semibold">
                I explored variations of typefaces, each for different reasons.
              </span>{" "}
              I tried Monotype Grotesque, as this has more variation in its
              strokes. Gill Sans as it is Bold. Joanna, because it has a nice
              slab serif. And Helvetica as this has a nice stroke width. I
              explored these variations at different widths (representing the
              smallest and largest text and areas set in all caps and areas set
              in upper/lower case). Then further by taking a sample of the text
              from my booklet to see how each typeface looks within the booklet.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[49%] flex flex-col gap-2">
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
        </div>
      </div>
      <h2 className="text-center sm:text-xl md:mt-4 py-[26px] font-bold">
        Check out the full booklet on screen below
      </h2>
      <div className="bg-gray-800 h-[400px] flex items-center justify-center text-white">WHAT ARE THESE SLIDE THINGS</div>
      <h2 className="text-center sm:text-xl md:mt-4 py-[26px] font-bold">
        Read more about the process within the report
      </h2>
      <div className="bg-gray-800 h-[400px] flex items-center justify-center text-white">WHAT ARE THESE SLIDE THINGS</div>
      <div className="pt-16">
        <SmallDetails />
      </div>
    </div>
  );
}
