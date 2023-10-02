import { useState } from "react";
import ViewImage from "../ViewImage";
import image1 from "../images/shy/shy-1.png";
import image2 from "../images/shy/shy-2.png";
import image3 from "../images/shy/shy-3.png";
import image4 from "../images/shy/shy-4.png";
import image5 from "../images/shy/shy-5.png";
import image6 from "../images/shy/shy-6.png";
import image7 from "../images/shy/shy-7.png";
import image8 from "../images/shy/shy-8.png";
import image9 from "../images/shy/shy-9.png";
import image10 from "../images/shy/shy-10.png";
import image11 from "../images/shy/shy-11.png";
import image12 from "../images/shy/shy-12.png";
import image13 from "../images/shy/shy-13.png";
import image14 from "../images/shy/shy-13.png";
import image15 from "../images/shy/shy-13.png";

export default function Shy() {
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
    image14,
    image15,
  ];

  return (
    <div className="max-w-[1400px] mx-auto sm:p-4">
      {image && <ViewImage image={image} setImage={setImage} images={images} />}
      <h1 className="text-center sm:text-2xl md:mt-4 py-[32px] font-bold">
        SHY FX ESSENTIAL ALBUM
      </h1>
      <div className="w-full sm:w-[70%] px-4 pt-4 sm:px-0 ">
        <h2 className="sm:text-2xl md:mt-4 pb-[20px] font-semibold">Brief</h2>
        <p className="text-sm md:text-lg">
          The brief was to design and make physical and digital packaging for
          the launch of 'SHY FX Essential album', whilst improving their current
          branding. Along with designing three alternative promotional material.{" "}
        </p>
        <br />
        <p className="text-sm md:text-lg">
          I wanted to design an album cover that not only was user friendly, but
          also communicated the style of the music to the listener.
        </p>
      </div>
      <img
        src={image1}
        alt="image"
        onClick={() => setImage(1)}
        className="hover:cursor-zoom-in py-10"
      />
      <div className="flex flex-wrap gap-[2%]">
        <div className="w-full sm:w-[46%]">
          <img
            src={image2}
            alt="image"
            onClick={() => setImage(2)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image3}
            alt="image"
            onClick={() => setImage(3)}
            className="hover:cursor-zoom-in"
          />
        </div>
        <div className="w-full sm:w-[52%] p-4 sm:p-0">
          <h2 className="sm:text-2xl md:mt-4 pb-[20px] font-bold">
            Music packaging
          </h2>
          <ul className="list-disc ml-5 text-sm sm:text-base">
            <li>Genre – D’n’B (Drum and Base)</li>
            <br />
            <li>Artist – Shy FX</li>
            <br />
          </ul>
          <h2 className="sm:text-xl md:mt-4 pb-[20px] font-bold">
            Problem/Solution
          </h2>
          <p className="text-sm sm:text-base">
            D’n’B does not tend to be sold or marketed through hard copies (CDs,
            Vinyl...) Whilst I was initially looking for an artist or genre to
            focus on I found most D’n’B artists release single hits which have
            their own identity and cover. Or tend to come under other artists
            albums as they just feature on the song/ produce the beat. I found
            this an interesting hole in the market and potential new selling
            point. Creating an album for a chosen artist that features all of
            their hits in one place. So my approach to this project will be from
            the prospective of a new album rather than a re-design of an
            existing album.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            I chose Shy FX as out of the popular/well known D’n’B artists he has
            the least self promoting albums. Rather more he tends to realise
            ‘Non- album singles’ or feature on other peoples albums. Therefore,
            my design concept was to create an album/ one place where people can
            listen to his ‘greatest hits’ and ‘solo hits’ in one place.
          </p>
          <br />
          <h2 className="sm:text-xl pb-[20px] font-semibold">
            Mood Board
          </h2>
          <p className="text-sm sm:text-base">
            Before I started my own designing I created a visual mood board. I
            always find this useful to get into the mood and emotions of any
            design. I started off by searching D’n’B aesthetic and abstract.
            Then took some images and styles I want to consider incorporating
            within my own design.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            <span className="font-bold">UV Lights</span> – The majority of D’n’B
            is played at raves or festivals. A theme of festivals and raves are
            flashing UV lights. To point that raves can be reconsigned and
            identified by just neon uv lights.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            <span className="font-bold">Metallic/Holographic affect</span> –
            When carrying out initial visual research, it was the covers with
            holographic elements that stood out to me. But each had their own
            flaw. So i was thinking of different ways to explore creating the
            same affect but in a different way. Which is when I thought about
            creating digital graphics that give of similar affects.
          </p>
        </div>
      </div>
      <h2 className="text-center sm:text-2xl md:mt-4 py-[40px] font-bold">
        Vinyl album
      </h2>
      <div className="flex flex-wrap gap-[2%] pb-20">
        <div className="w-full sm:w-[49%] p-4 sm:p-0">
          <h2 className="sm:text-2xl font-bold">Initial concept experiments</h2>
          <br />
          <p className="text-sm sm:text-base text-gray-800">
            I chose to take the skull idea further, as after carrying out
            research then further listening to the music again, I found that the
            music is more ‘dance’ and ‘reggae’ then just your generic drum and
            base. Therefore, the uv lights may miss represent the artist and
            fall into the generic category.
          </p>
          <br />
          <p className="text-sm sm:text-base">
            Whereas, the imagery of the skull represents the way a person feels
            listening to the music, stripping them back to their mechanics and
            build. Due to the the beat of the D’n’B and repetitiveness and how
            it makes the brain feel and the sound when it penetrates the skin.
            With the dripping of paint as a metaphor for the reggae and dance
            side of the album. Representing the music and sound flowing through
            your skin and the sound of the music. The bright colours are to
            represent the creativeness of the music and the bright colours
            associated with the artists raves and festivals.
          </p>
        </div>
        <div className="w-full sm:w-[49%] grid grid-cols-2">
          <img
            src={image4}
            alt="image"
            onClick={() => setImage(4)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image5}
            alt="image"
            onClick={() => setImage(5)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image6}
            alt="image"
            onClick={() => setImage(6)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image7}
            alt="image"
            onClick={() => setImage(7)}
            className="hover:cursor-zoom-in"
          />
        </div>
      </div>
      <div className="p-4 sm:p-0">
        <h2 className="sm:text-2xl font-bold">Inner sleeve & record</h2>
        <br />
        <p className="text-sm sm:text-base text-gray-800">
          The record was created in the same style of the album cover. Each side
          was unique, and emphasised the different sides to the record. But it
          also represented the creativeness of SKY FX’s style of music. The
          flowing of the paint represented the soundtracks to his songs. With
          the bright colours representing the rave setting his music is played
          at. It can also been seen to recreate how listeners feel listening to
          his music.
        </p>
        <br />
        <p className="text-sm sm:text-base">
          The repeated patterns skulls are made up from different elements
          within the album. Skull 1’s colours were taken from the front cover,
          skull 2’s colours were taken from side A of the record, and skull 3’s
          colours were taken from side B of the record. This meant that the
          inner sleeve worked as a middle connection between the colours on the
          front, and the colours on the vinyl. Therefore, creating a positive
          relationship between the front cover and the record.
        </p>
        <br />
        <p className="text-sm sm:text-base">
          The inner sleeve still consists of the plastic layer, as this works as
          a protection for the middle cut out circle. This, is so the vinyl
          label could be on show from the inner sleeve, whilst still protecting
          the record from getting scratched or damaged.
        </p>
        <br />
        <p className="text-sm sm:text-base">
        The inner sleeve shape is now a half circle for two reasons. Firstly from a practically point of view, it protects the record from sliding around or getting scratched. But also from a creative point of view, as it adds another surprise element for the user.
        </p>
      </div>
      <div className="flex">
      <img
            src={image8}
            alt="image"
            onClick={() => setImage(6)}
            className="hover:cursor-zoom-in w-1/2"
          />
          <img
            src={image9}
            alt="image"
            onClick={() => setImage(7)}
            className="hover:cursor-zoom-in w-1/2"
          />
      </div>
      
    </div>
  );
}
