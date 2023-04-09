import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">About</h3>

      <motion.img
        className="rounded-full mt-16 -mb-16 md:mb-0 flex-shrink-0 w-48 h-48 object-cover md:w-64 md:h-64"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        // src="https://w7.pngwing.com/pngs/115/800/png-transparent-drum-set-illustration-rock-band-4-the-beatles-rock-band-computer-icons-musical-ensemble-drum-stick-drum-area-music-festival.png"
        src={urlFor(pageInfo?.profilePic)}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#186bd7]/50">little</span>{" "}
          background
        </h4>
        {/* TODO: Input a _real_ background about myself */}
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
