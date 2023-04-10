import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = { skills: Skill[] };

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionTitle">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="absolute top-52 grid grid-cols-4 gap-5">
        {skills
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          .map((skill, i) => {
            return (
              <Skill
                key={skill._id}
                skill={skill}
                fromLeft={i < skills.length / 2}
              />
            );
          })}
      </div>
    </motion.div>
  );
}

export default Skills;
