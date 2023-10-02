import { useState } from "react";
import SmallDetails from "../SmallDetails";
import ViewImage from "../ViewImage";
import image1 from "../images/prevent/prevent-1.png";
import image2 from "../images/prevent/prevent-2.png";
import image3 from "../images/prevent/prevent-3.png";
import image4 from "../images/prevent/prevent-4.png";
import image5 from "../images/prevent/prevent-5.png";
import image6 from "../images/prevent/prevent-6.png";
import image7 from "../images/prevent/prevent-7.png";
import image8 from "../images/prevent/prevent-8.png";
import image9 from "../images/prevent/prevent-9.png";
import image10 from "../images/prevent/prevent-10.png";
import image11 from "../images/prevent/prevent-11.png";
import image12 from "../images/prevent/prevent-12.png";
import image13 from "../images/prevent/prevent-13.png";
import image14 from "../images/prevent/prevent-14.png";
import image15 from "../images/prevent/prevent-15.png";
import image16 from "../images/prevent/prevent-16.png";

export default function Prevent() {
  const [image, setImage] = useState(true);

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
    image14,
    image15,
    image16,
  ];

  return (
    <div className="max-w-[1400px] mx-auto text-sm sm:p-4 text-blue-900">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <div className="text-center p-4 sm:p-0 mx-auto max-w-[800px]">
        <h1 className="text-center sm:text-4xl md:mt-4 py-[26px] font-bold">
          PREVENT TYPE 2
        </h1>
        <p className="font-semibold sm:text-xl">
          Prevent Type 2 is a website / web app that provides information around
          the condition of pre-diabetes. Whilst offering interactive features
          that such as a game and a quiz that provides information and
          monitoring and tracking features through the account section to help
          with everyday life of managing pre-diabetes and prevent it from
          becoming type 2.
        </p>
      </div>
      <img
        src={image1}
        alt=""
        onClick={() => setImage(1)}
        className="hover:cursor-zoom-in"
      />
      <div className="p-4 sm:p-0 mx-auto max-w-[800px]">
        <h1 className="sm:text-xl md:mt-4 py-[26px] font-bold">Module brief</h1>
        <p className="font-semibold sm:text-lg">
          To carry out a robust user experience research process and then create
          a responsive web design on the subject of health, showing how the
          design would adapt to multiple devices and address the needs
          identified in your research. This project had a focus on process,
          understanding users, and problem solving.​​​​​​​
        </p>
      </div>
      <div className="flex gap-[2%] w-full py-12">
        <img
          src={image2}
          alt=""
          onClick={() => setImage(2)}
          className="hover:cursor-zoom-in w-[46%]"
        />
        <img
          src={image3}
          alt=""
          onClick={() => setImage(3)}
          className="hover:cursor-zoom-in w-[52%]"
        />
      </div>
      <div className="p-4 sm:p-0 mb-8 mx-auto max-w-[800px]">
        <h1 className="text-center sm:text-4xl md:mt-4 py-[26px] font-bold">
          About Pre-diabetes
        </h1>
        <p className="font-bold text-green-600 sm:text-lg">
          More than 1 in 3 adults have pre-diabetes. Of which more than 80%
          don’t know they have it
        </p>
        <p className="font-semibold sm:text-lg">(CDC, 2022).</p>
        <br />
        <p className="font-semibold sm:text-lg">
          There are not a lot of resources out there to support people with
          pre-diabetes, such as providing information around the condition.
          However, by having the right information and support all in one place,
          it can help improve everyday life of people who suffer from
          pre-diabetes. Unlike other websites that are general health sites, or
          more focused on type 1 and 2 diabetes, this sites main focus is
          pre-diabetes. Through providing more focused information and
          interactive features, this site aims to helping people out there that
          have been diagnosed at pre-diabetic.
        </p>
      </div>
      <div className="flex flex-wrap gap-[2%] p-4">
        <div className="w-full sm:w-[40%] py-4">
          <h1 className="sm:text-4xl font-bold">
            User personas and low-fidelity wireframes
          </h1>
          <br />
          <p className="sm:text-lg">
            After carrying out my user interview I was able to better understand
            the pain points, needs and goals of one individual suffering from
            pre-diabetes. After carrying out my competitors analysis, I was not
            overly surprised to find out that my interviewee was not aware of
            any support systems out there for them. As there is not many sites
            out there solely about pre-diabetes, rather just pages within other
            websites. I thought it was important to note that the interviewee
            would find a website or app that provides useful information helpful
            to better manage their condition.
          </p>
          <br />
          <p className="sm:text-lg">
            When looking through my peers interviews, I found a similarity of
            ‘concern’ when it comes to food and trusting information they are
            given. Especially if the information is incorrect, or rather they
            can not find the correct information, it can be a fatal matter.
            Similarly in my peers interviews, there’s a need of having a
            trusting site that provides correct information all in one place. I
            made sure to include this within a personas needs, which later
            helped me design the user journeys and page flows, based upon my own
            interview and those of my peers.
          </p>
        </div>
        <div className="w-full sm:w-[58%] py-4">
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
        </div>
      </div>
      <div className="flex flex-wrap gap-[2%] p-4">
        <div className="w-full sm:w-[56%] py-4">
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
        </div>
        <div className="w-full sm:w-[42%] py-4">
          <h1 className="sm:text-4xl font-bold">
            Mid-fidelity wireframes and user testing
          </h1>
          <br />
          <p className="sm:text-lg">
            The aim of the user testing was to find out whether my webapp was
            user friendly and fitted the purpose of the journey. I tested my
            prototype on 3 users to receive fair findings.
          </p>
          <br />
          <p className="sm:text-lg">
            I found that all 3 users found the overall layout “clear” “very well
            organised” with “obvious buttons”. When all 3 users were asked to
            carry out the ‘Call to action’ buttons of the webapp, they found all
            the CTA’s and carried them out with ease. This was reassuring as it
            meant this page flow was user friendly and easy to understand.
          </p>
          <br />
          <p className="sm:text-lg">
            Although, I had a few observation findings from the user testing,
            the most prevalent one was the user-ability of some of the
            click-able buttons. For example I found that there was a delay in
            the click when each user pressed the CTA ‘Create account’. Also, for
            the hidden sugars game it was designed to be clicked in a certain
            order, which was quite frustrating to the user. I have since
            realised that this feature needs to me more flexible for users.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">Responding to user testing</h1>
          <br />
          <p className="sm:text-lg">
            In response to the user testing observation findings, I made the
            changes to two of the click-able links to make the webapp user
            friendly. I quickly changed the ‘Create account’ CTA as the
            transitioning had been unawarely changed to drag rather then click.
            I also added more click-able options for the ‘hidden sugar’ feature,
            as previously the options were linked to a certain order rather then
            all click-able in any order.
          </p>
          <br />
          <p className="sm:text-lg">
            The only issue that worried me by changing this was users would get
            confused on how many options there are before moving on. So I added
            an instructions to how many options there were.
          </p>
          <br />
        </div>
      </div>
      <div className="flex flex-wrap gap-[2%] p-4">
        <div className="w-full sm:w-[35%] py-4">
          <h1 className="sm:text-4xl font-bold">High-fidelity wireframes</h1>
          <br />
          <h1 className="sm:text-xl font-bold">Homepage</h1>
          <br />
          <p className="sm:text-lg">
            The greatest adaptation between the desktop and the mobile is the
            navigation bar. Due to the limited space on the mobile compared to
            the desktop, the navigation bar has been replaced with a pop up
            slide out burger menu (shown below). By adapting this, has made sure
            the design is user friendly and accessible across all devices.
          </p>
          <br />
          <p className="sm:text-lg">
            The header image has been resized to fit appropriately for each
            device. As the desktop is larger, it is more impactful having the
            image large across the page. Whereas, on the mobile, it sits better
            visually having it smaller at the bottom so the text is still
            legible.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">My story</h1>
          <br />
          <p className="sm:text-lg">
            The greatest adaptation between the desktop and the mobile is the
            layout of the title and the image at the top of the article. The two
            column layout suited the desktop version visually better and more
            attractive to the user. But due to the smaller space on the mobile
            it made more sense making it one column going downwards.
          </p>
          <br />
          <p className="sm:text-lg">
            Similar to the ‘My story’ page, I used a two column layout for the
            desktop which changed to a one column layout for the mobile. The
            main adaptation between the desktop and the mobile is the handling
            of the links to both interactive features. As the features were next
            to each other on the desktop, it was important to have consistency
            across both in terms of layout and positioning. Whereas, on the
            mobile as they were in one column is was more important that they
            were the same size only, as the visual hierarchy across both devices
            are different due to the size difference.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">Guess the hidden</h1>
          <br />
          <p className="sm:text-lg">
            The greatest adaptation on the hidden sugars game across both
            devices is the layout. On the desktop the click-able options and in
            three columns, whereas, in the mobile they are only in two. Both
            sizes work and are suited for to their own devices.
          </p>
          <br />
          <p className="sm:text-lg">
            The account bar that can be seen on the desktop would be too big and
            intrusive if kept to the same layout for the mobile. Instead, a pull
            out bar can be found for the mobile, which when pulled out, shows
            the same layout to the desktop (shown below). This provides
            flexibility for the user, and makes sure that every element on the
            page is not disfigured to make sure it fits at the smaller size.
          </p>
          <br />
        </div>
        <div className="w-full sm:w-[63%] py-4">
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
      </div>
      <div className="flex flex-wrap gap-[2%] p-4">
        <div className="w-full sm:w-[49%] py-4">
          <h1 className="sm:text-4xl font-bold">Visual design</h1>
          <br />
          <p className="sm:text-lg">
            Prevent Type 2 green is used throughout for the main CTA’s, to make
            each page clear and assessable for the user.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">Logo</h1>
          <br />
          <p className="sm:text-lg">
            The logo consists of the name Prevent Type 2, representing that the
            site is about preventing type 2 diabetes. With a blue ribbon for the
            ‘y’. The blue ribbon is reconsigned as representing the condition
            diabetes. The primary logo, is the main logo to be used on the site,
            with the alternative logo being used on the home page/black
            backgrounds. The alternative logo is to be used over the white logo,
            as the blue ribbon is still identifiable within this logo.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">Colour scheme</h1>
          <br />
          <p className="sm:text-lg font-semibold">
            Vibrant but sophisticated colour pallet. Use of colour to add levels
            to the site, but also visual difference for the reader with text
            heavy pages. With CTA green having a navigational purpose, to help
            the user have clear direction and usage of the site.
          </p>
          <br />
          <p className="sm:text-lg font-semibold">
            The headings are a dark blue, to stand out. But also to tie in with
            the colours that can be reconsigned relating to the topic of
            diabetes.
          </p>
          <br />
          <p className="sm:text-lg font-semibold">
            The main text is a tint of black, to make easier to read and help
            the heads stand out.
          </p>
          <br />
          <h1 className="sm:text-xl font-bold">Components</h1>
          <br />
          <p className="sm:text-lg">
            Prevent Type 2 uses a range of components that follow its branding
            to create a coherent and accessible site for the user. The
            components shown on this page are used consistently throughout the
            site to maximise familiarity for the user.
          </p>
        </div>
        <div className="w-full sm:w-[49%] py-4">
          <img
            src={image14}
            alt=""
            onClick={() => setImage(14)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image15}
            alt=""
            onClick={() => setImage(15)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image16}
            alt=""
            onClick={() => setImage(16)}
            className="hover:cursor-zoom-in"
          />
        </div>
      </div>
      <div className="p-4 sm:p-0 mb-8 text-center mx-auto max-w-[800px]">
        <h1 className="sm:text-4xl md:mt-4 py-[26px] font-bold">
          Full design process
        </h1>
        <p className="font-semibold sm:text-lg">
          Look through the report for the full research, user testing and
          development to create Prevent Type 2.
        </p>
      </div>
      <div className="bg-gray-700 h-[400px]"></div>
      <p className="text-center my-2">Prevent Type 2 report </p>
      <div className="p-4 sm:p-0 mb-8 text-center mx-auto max-w-[800px]">
        <h1 className="sm:text-4xl md:mt-4 py-[26px] font-bold">
          Deliverable walkthroughs
        </h1>
      </div>
      <div className="bg-gray-700 h-[400px]"></div>
      <p className="text-center my-2">Prevent Type 2 desktop walkthrough</p>
      <div className="flex justify-center">
        <button className="mt-16 mb-8 py-3 px-8 bg-blue-900 hover:bg-blue-900/80 text-white font-bold rounded-full">
          Desktop clickable prototype
        </button>
      </div>
      <div className="bg-gray-700 h-[400px]"></div>
      <p className="text-center my-2">Prevent Type 2 desktop walkthrough</p>
      <div className="flex justify-center">
        <button className="mt-16 mb-8 py-3 px-8 bg-blue-900 hover:bg-blue-900/80 text-white font-bold rounded-full">
          Mobile clickable prototype
        </button>
      </div>
      <div className="py-8">
        <SmallDetails />
      </div>
    </div>
  );
}
