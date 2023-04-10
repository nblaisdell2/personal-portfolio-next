import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import Image from "next/image";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overlow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionTitle">Projects</h3>

      <div className="relative w-full overflow-x-scroll overflow-y-hidden scrollbar-custom snap-x snap-mandatory z-20">
        {projects?.map((project, i) => {
          return (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src={urlFor(project?.projectImage)}
                className="h-60 sm:h-80 sm:w-[750px] w-screen rounded-md object-cover"
                alt=""
              />

              <div className="space-y-6 px-4 md:px-10 w-screen sm:max-w-6xl">
                <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#186bd7]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>

                <div className="flex space-x-2 justify-center w-full">
                  {project?.technologies?.map((tech) => {
                    return (
                      <div
                        key={tech._id}
                        className="flex space-x-2 justify-center"
                      >
                        <Image
                          height={500}
                          width={500}
                          src={urlFor(tech.skillImage)}
                          className="h-8 w-8"
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>

                <p className="text-sm sm:text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#186bd7]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
