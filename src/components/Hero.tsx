import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { urlFor } from "../../sanity";

type Props = { pageInfo: PageInfo; phrases: Phrase[] };

function Hero({ pageInfo, phrases }: Props) {
  const phraseWords = phrases
    ?.sort((a, b) => a.sortOrder - b.sortOrder)
    .map((ph) => {
      return ph.phrase;
    });
  const [text, count] = useTypewriter({
    words: phraseWords,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        alt="Picture of Me"
        src={urlFor(pageInfo?.heroImage)}
        width={300}
        height={300}
        className="-mt-10 rounded-full h-56 w-56 sm:h-64 sm:w-64 mx-auto object-cover z-20"
      />

      <div className="z-20 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>

        {/* Typewriter Phrases */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold px-10 h-32 sm:h-auto">
          <span className="">{text}</span>
          <Cursor cursorColor="#186bd7"></Cursor>
        </h1>

        {/* Links */}
        <div className="pt-0 sm:pt-5 grid grid-cols-2 max-w-fit">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
