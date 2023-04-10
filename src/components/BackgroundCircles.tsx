import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute rounded-full border border-[#333333] h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-[#333333] h-[150px] sm:h-[300px] w-[150px] sm:w-[300px] mt-52" />
      <div className="absolute rounded-full border border-[#333333] h-[250px] sm:h-[500px] w-[250px] sm:w-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#186bd7] h-[350px] sm:h-[650px] w-[350px] sm:w-[650px] mt-52 animate-pulse opacity-40" />
      <div className="absolute rounded-full border border-[#333333] h-[450px] sm:h-[800px] w-[450px] sm:w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
