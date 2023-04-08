import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  // TODO: Figure out how I can pull these phrases from somewhere else and load them here
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Nick!", "Software Engineer", "Passionate about Software"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {/* TODO: Get an _actual_ picture of myself to put here */}
      <Image
        alt="Picture of Me"
        src={
          "https://w7.pngwing.com/pngs/115/800/png-transparent-drum-set-illustration-rock-band-4-the-beatles-rock-band-computer-icons-musical-ensemble-drum-stick-drum-area-music-festival.png"
        }
        width={300}
        height={300}
        className="relative rounded-full h-48 w-48 mx-auto object-cover"
      />

      <div className="z-20">
        {/* Title */}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>

        {/* Typewriter Phrases */}
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB0A"></Cursor>
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
