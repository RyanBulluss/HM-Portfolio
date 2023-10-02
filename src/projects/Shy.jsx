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
import image14 from "../images/shy/shy-14.png";
import image15 from "../images/shy/shy-15.png";
import SmallDetails from "../SmallDetails";

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
          <h2 className="sm:text-xl pb-[20px] font-bold">Mood Board</h2>
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
          The inner sleeve shape is now a half circle for two reasons. Firstly
          from a practically point of view, it protects the record from sliding
          around or getting scratched. But also from a creative point of view,
          as it adds another surprise element for the user.
        </p>
      </div>
      <div className="flex py-8">
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
      <div className="w-full flex flex-wrap gap-[2%] my-4">
        <div className="w-full sm:w-[38%]">
          <div className="p-4 sm:p-0">
            <h2 className="sm:text-2xl font-bold">Concept & context</h2>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The final design represents the drum and bass and jungle music
              style to SHY FX. Through the use of colour, and excitement and
              creativeness.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The front cover represents how listeners feel listening to his
              music, and recreates the feel of listening to it at a rave,
              through the imagery of the skull and the running paint. The bright
              and bold colours represents the excitement and colours associated
              with his concerts.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The use of foil represents the excitement of his music, and also
              ties in with the association of him playing at raves.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The repeated pattern of the skulls for the inner sleeve represents
              the quick and fast beats to his music. Whilst also playing with
              the eye, to visually represent the trippyness of the music has on
              the brain.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              Even the actual record represents the music of the album, through
              the bright colours to represent the excitement. With the patterns
              looking like galaxies, to recreate the ‘out of space’ feeling the
              listeners normally have and experience listening to his music.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              Therefore, the design decisions of the pouring paint, 3D skull,
              the repeated pattern skull, and the holographic foil, are all
              justified as they perfectly communicate the music of the album
              through design.
            </p>
            <br />
          </div>
        </div>
        <div className="w-full sm:w-[60%]">
          <img
            src={image10}
            alt="image"
            onClick={() => setImage(10)}
            className="hover:cursor-zoom-in mb-2"
          />
          <img
            src={image11}
            alt="image"
            onClick={() => setImage(11)}
            className="hover:cursor-zoom-in"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-[2%] mt-8 mb-16">
        <div className="w-full flex flex-col gap-2 sm:w-[49%]">
          <img
            src={image12}
            alt="image"
            onClick={() => setImage(12)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image13}
            alt="image"
            onClick={() => setImage(13)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image14}
            alt="image"
            onClick={() => setImage(14)}
            className="hover:cursor-zoom-in"
          />
          <img
            src={image15}
            alt="image"
            onClick={() => setImage(15)}
            className="hover:cursor-zoom-in"
          />
        </div>
        <div className="w-full sm:w-[49%] py-4">
          <div className="p-4 sm:p-0">
            <h2 className="text-lg sm:text-2xl font-bold">
              Other deliverables
            </h2>
            <br />
            <h3 className="sm:text-xl font-bold">7" Single albums </h3>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              I designed two single 7” album covers, that could be sold
              alongside the LP album. I chose to do two singles as when
              researching what normal gets sold as a set alongside albums, this
              was a popular choice. I chose to do two singles, to show how the
              design could be taken and used in different ways, but still be
              part of a set.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The top album is for the single ‘Gold Dust’, one of SKY FX most
              popular songs. Rather then using the holographic foiled used on
              the main album, I used gold foil to still create consistency
              across the series (by using foil), but to also tie in with the
              song, and create some individuality for this album.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The skull experiment on the front can be seen to have glitter in
              the paint, to work as a metaphor and relate to the song ‘Gold
              Dust’. This skull is also cropped to only show part of the skull,
              and to be looking in a different direction to represent the fact
              it is part of the main album.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The second single I did was for ‘Original nuttah’. As this single
              is less dance and more drum and base / rave scenes, I wanted to
              represent this through the design. Therefore I chose to take a
              more dark approach. The skull on the front cover can be seen as a
              dark and almost uv version of the skull on the main album. This is
              to represent the rave side of the single (through the dark and uv
              lights).
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              Again, the skull is cropped to only show part of its head, this to
              represent another part of the main album.I chose to foil this
              cover with blue foil, as this tied in with the blue in the skull
              and the idea of uv strobe lights seen at raves.
            </p>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              Both 7” album covers, have their own individuality, whilst still
              being consistent with the main album to create a successful series
              of designs.
            </p>
            <br />
            <h3 className="sm:text-xl font-bold">UV paint palette</h3>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              To keep with the connection of the series design, and to avoid the
              feel of the box being a smaller version of the album design. The
              box is made up of a cropped version of the skull to have the eyes
              and nose on the front, and the mouth and paint puddle on the back.
              The idea behind the full bleed of the image was to represent the
              bright colours available inside the box, whilst tying in with the
              album design. To created even more consistency, the logo on the
              front of the box was foiled, to tie in with the foiled logo on the
              front of the album cover.
            </p>
            <br />
            <h3 className="sm:text-xl font-bold">Bucket hat </h3>
            <br />
            <p className="text-sm sm:text-base text-gray-800">
              The bucket hat was designed as merch to be sold at festivals /
              raves or be brought before. The intent of the design was for it to
              be funky and suitable for a rave, but also, similar to the
              branding of the album. I was limited to the form of connection as
              this is only a mock-up of the bucket hat. However, the real bucket
              hat would have the logo as holographic to tie in with the rest of
              the series design logos.
            </p>
          </div>
        </div>
      </div>
      <SmallDetails />
    </div>
  );
}
