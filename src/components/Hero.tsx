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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        alt="Picture of Me"
        src={urlFor(pageInfo?.heroImage)}
        width={300}
        height={300}
        className="relative rounded-full h-64 w-64 mx-auto object-cover"
      />

      <div className="z-20">
        {/* Title */}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>

        {/* Typewriter Phrases */}
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#186bd7"></Cursor>
        </h1>

        {/* Links */}
        <div className="pt-5">
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
