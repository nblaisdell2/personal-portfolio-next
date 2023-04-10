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
        className="rounded-full mt-28 sm:-mt-16 -mb-32 sm:-mb-16 md:mb-0 flex-shrink-0 object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(pageInfo?.profilePic)}
      />

      <div className="mb-16 mt-32 sm:mb-24 sm:mt-0 space-y-6 sm:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#186bd7]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm sm:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
