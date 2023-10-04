import { useState } from "react";
import SmallDetails from "../SmallDetails";
import ViewImage from "../ViewImage";
import image1 from "../images/illusion/illusion-1.png";
import image2 from "../images/illusion/illusion-2.png";
import image3 from "../images/illusion/illusion-3.png";
import image4 from "../images/illusion/illusion-4.png";
import image5 from "../images/illusion/illusion-5.png";
import image6 from "../images/illusion/illusion-6.png";
import image7 from "../images/illusion/illusion-7.png";
import image8 from "../images/illusion/illusion-8.png";
import image9 from "../images/illusion/illusion-9.png";
import image10 from "../images/illusion/illusion-10.png";
import image11 from "../images/illusion/illusion-11.png";
import image12 from "../images/illusion/illusion-12.png";
import PlayVideo from "../PlayVideo";
import video1 from "../videos/illusion.mp4";

export default function Illusion() {
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
  ];

  return (
    <div className="max-w-[1400px] mx-auto text-sm sm:p-4">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <h1 className="text-center sm:text-2xl md:mt-4 py-[26px] font-bold">
        ILLUSION
      </h1>
      <div className="max-w-[900px] text-center mx-auto my-8 p-4 sm:px-0">
        <p className="text-sm md:text-lg font-semibold">
          Dare to glamour, an independent magazine. A project consisting of
          editorial, branding and web design
        </p>
      </div>

      <img
        src={image1}
        alt=""
        onClick={() => setImage(1)}
        className="hover:cursor-zoom-in"
      />
      <div className="flex flex-wrap gap-[2%] py-4">
        <div className="w-full sm:w-[44%] py-4">
          <img
            src={image2}
            alt=""
            onClick={() => setImage(2)}
            className="hover:cursor-zoom-in"
          />
        </div>
        <div className="w-full sm:w-[54%] px-4 sm:px-0 py-4">
          <p className="sm:text-lg">
            Picture this, a makeup magazine that does not promote unhealthy
            beauty standards, instead focuses on the beauty within creativity.
            Inspired by{" "}
            <a
              className="underline hover:text-gray-600"
              href="https://www.bbc.co.uk/programmes/p071fs3c"
              rel="noreferrer"
            >
              Glow Up: Britain's Next Make-up Star
            </a>{" "}
            creativity and looks. Illusion is a new and upcoming makeup-magazine
            with a focus on pushing the boundaries of makeup through creativity.
            Illusion is not like any other beauty magazine; each issue is
            completely unique and can be found covering many different aspects
            of makeup.
          </p>
          <br />
          <p className="sm:text-lg">
            Illusion is a 274mm x 210mm independent print magazine, consisting
            of around pp. 100–120 per issue, with an online presence (website
            and instagram page) to engage users, whilst also working as a shop.
          </p>
          <br />
          <p className="sm:text-lg">
            Every issue will include an exclusive interview with an important
            figure within the makeup world, along with tips and tricks to
            achieve a certain makeup style – dependant on the topic of the
            issue. These styles will be based on the magazine sections of:
            prosthetics, drag, industry, television, film, and artist looks.
            Each issue will include a special feature of an up and coming MUA
            (makeup artist), who will also feature on the cover.
          </p>
          <br />
          <p className="sm:text-lg">
            Every ‘Meet the artist’ section, is unique and personal, where the
            chosen MUA will explain, why they have chosen their feature, the
            reasoning behind it and how it changed their life. This element of
            the magazine is important as it promotes upcoming MUA by showcasing
            their talent, which is not something a magazine has done before.
          </p>
          <br />
        </div>
      </div>
      <h1 className="text-center sm:text-2xl md:mt-4 py-[26px] font-bold">
        THE FULL MAGAZINE
      </h1>
      <div className="h-[30vh] sm:h-[80vh]">
        <iframe
          src="https://indd.adobe.com/embed/729c84ba-9428-4c64-819b-095dbde31332?startpage=1&amp;allowFullscreen=true"
          height={"100%"}
          width={"100%"}
          title="third"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </div>
      <div className="flex flex-wrap gap-[2%] py-4">
        <div className="w-full sm:w-[51%] py-4 px-4 sm:px-0">
          <h1 className="sm:text-xl font-bold">Creating a series</h1>
          <br />
          <p className="sm:text-lg">
            Each issue of Illusion focuses on pushing the boundaries of makeup
            through creativity. Illusion is not like any other beauty magazine;
            each issue is completely unique and can be found covering many
            different aspects of makeup.
          </p>
          <br />
          <p className="sm:text-lg">
            As creativity is never ending, with many talented artists and
            upcoming artists wanting to share and promote their work, there is
            almost infinite topics, themes, and artists to showcase in further
            volumes.
          </p>
          <br />
          <p className="sm:text-lg">
            As clichés go, ‘don’t judge a book by its cover’ is an accurate one.
            It was important for the cover to not only communicate what the
            magazine was about but also create a design that produces a
            recognisable identity. The masthead on the cover is not a print
            element but a spot UV, meaning the text can only be read when the
            user is focused on the physical cover and it catches the light. This
            was done so the photo was the main element on the page and not
            fighting with any typographic detail. The layout of the masthead
            covers the whole cover, consisting of the word Illusion split over 3
            rows. This is so the reader would have to take time to decipher the
            title, but also as it links to connotations of the name itself. It
            was chosen to do this to show the magazine breaking out of the
            traditional restrictions.
          </p>
        </div>
        <div className="w-full sm:w-[47%] grid grid-cols-2 gap-2 py-4">
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
        </div>
      </div>
      <div className="flex flex-wrap gap-[2%] py-4">
        <div className="w-full sm:w-[49%] py-4">
          <img
            src={image11}
            alt=""
            onClick={() => setImage(11)}
            className="hover:cursor-zoom-in"
          />
        </div>
        <div className="w-full sm:w-[49%] px-4 sm:px-0 py-4">
          <h1 className="sm:text-xl font-bold">Page detail</h1>
          <br />
          <p className="sm:text-lg">
            For the meet the artist section within each issue, the reader can
            find a QR code linking to the artist's Instagram page through the
            form of a flap. This was done so it does not interfere with the page
            information and detail, but also to grab the readers attention and
            to encourage them to follow the artist. From a design point of view,
            it ads excitement for the reader as it differentiates from previous
            pages.
          </p>
          <br />
          <p className="sm:text-lg">
            Another factor that is different within the 'meet the artist
            section' is the use of different paper stock for the photos. The
            paper used is more shiny and suited for photos to emphasis the
            talent of the artist being shown.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[2%] py-4">
        <div className="w-full sm:w-[55%] px-4 sm:px-0 py-4">
          <h1 className="sm:text-xl font-bold">Online presence</h1>
          <br />
          <p className="sm:text-lg">
            Illusion has two main online presences: a website and an instagram
            page. The website supports the magazine, providing you with an
            individual page for 'subscription’, where you are provided with two
            options of which you can easily subscribe too. A ‘shop’, where you
            can purchase all the current and back issues of Illusion, with the
            option to purchase a bundle, if you have missed out on previous
            years. An ‘editorial’ page which allows you to find blog posts and
            articles that are available online for free. If you want to find out
            more about Illusion, we also have a ‘consultancy’ page and an ‘about
            us’. Where you can find out more about what we do and who we are. On
            the website you are able to create an account, where you can log in
            to view your subscriptions and purchases along with making any
            changes to these.
          </p>
          <br />
          <p className="sm:text-lg">
            The instagram page will work solely as a social media page which is
            used to promote and engage users with the magazine, through regular
            posts, and by following the social media plan. The plan aids the
            social media team to make sure they are using Instagram in a
            proactive way to promote and attract new users, whilst engaging with
            current Illusion family members.
          </p>
        </div>
        <div className="w-full sm:w-[43%] py-4">
          <img
            src={image12}
            alt=""
            onClick={() => setImage(12)}
            className="hover:cursor-zoom-in"
          />
        </div>
      </div>
      <PlayVideo videoFile={video1} />
      <h1 className="sm:text-xl text-center text-pink-500 font-semibold">
        Illusion website walkthrough
      </h1>
      <div className="my-8 flex justify-center">
        <a
          href="https://xd.adobe.com/view/452363d6-a11a-4986-b847-37cd41d456a8-1070/?fullscreen&hints=off"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-2 bg-pink-400 text-lg hover:bg-pink-400/70 rounded-full text-white font-bold"
        >
          Desktop clickable prototype
        </a>
      </div>
      <h1 className="text-center sm:text-2xl md:mt-4 py-[26px] font-bold">
        Find out the logistics behind the Instagram page
      </h1>
      <iframe
        class="scribd_iframe_embed"
        src="https://www.scribd.com/embeds/645011232/content?start_page=1&amp;view_mode=scroll&amp;access_key=key-goNPEudzjZXRyEn2LLzK"
        scrolling="no"
        title="first"
        width="100%"
        height="600"
        frameborder="0"
      ></iframe>
      <h1 className="sm:text-xl text-center text-pink-500 font-semibold">
        Illusion Instagram plan
      </h1>
      <h1 className="text-center sm:text-2xl md:mt-4 py-[26px] font-bold">
        Read more about Illusion in the pitch document
      </h1>
      <iframe
        class="scribd_iframe_embed"
        src="https://www.scribd.com/embeds/645011702/content?start_page=1&amp;view_mode=scroll&amp;access_key=key-ofdaN9CMQbNMHWujcjNf"
        scrolling="no"
        title="second"
        width="100%"
        height="600"
        frameborder="0"
      ></iframe>
      <h1 className="sm:text-xl text-center text-pink-500 font-semibold">
        Illusion pitch document
      </h1>
      <div className="mt-16">
        <SmallDetails />
      </div>
    </div>
  );
}
