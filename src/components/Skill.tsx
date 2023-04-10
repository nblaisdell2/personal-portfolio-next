import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

type Props = {
  skill: Skill;
  fromLeft?: boolean;
};

function Skill({ skill, fromLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: fromLeft ? -100 : 100,
          opacity: 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={urlFor(skill?.skillImage)}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 filter transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-20 sm:h-20 xl:h-24 xl:w-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl text-center font-bold text-black opacity-100 block bg-white p-1 rounded-full">
            {skill?.title}
          </p>
          <p className="text-lg font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
