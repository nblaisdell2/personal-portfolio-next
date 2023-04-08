import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll scrollbar-custom p-10 snap-x snap-mandatory">
        {experiences.map((exp) => {
          return <ExperienceCard key={exp._id} experience={exp} />;
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
