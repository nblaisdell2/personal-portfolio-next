import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { format } from "date-fns";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="h-auto mt-28 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-fit sm:w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 xl:w-[500px] xl:h-[300px]"
        src={urlFor(experience?.companyImage)}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((tech) => {
            return (
              <Image
                key={tech._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(tech.skillImage)}
                width={500}
                height={500}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {format(new Date(experience?.dateStarted), "MMM yyyy")} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : format(new Date(experience?.dateEnded), "MMM yyyy")}
        </p>
        <ul className="list-disc list-inside space-y-4 text-md h-[300px] overflow-y-auto">
          {experience?.points.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
