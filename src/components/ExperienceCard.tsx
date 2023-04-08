import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] mt-10 object-cover object-center"
        src="https://w7.pngwing.com/pngs/115/800/png-transparent-drum-set-illustration-rock-band-4-the-beatles-rock-band-computer-icons-musical-ensemble-drum-stick-drum-area-music-festival.png"
        // src={urlFor(experience?.companyImage)}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((tech) => {
            return (
              <Image
                key={tech._id}
                className="h-10 w-10 rounded-full"
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                // src={urlFor(tech.skillImage)}
                width={500}
                height={500}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-md h-80 overflow-y-scroll">
          {experience?.points.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;