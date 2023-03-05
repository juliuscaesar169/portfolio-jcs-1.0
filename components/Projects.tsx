import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
        <h3 className="sectionHeader">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbarPage">
            {projects?.map((project, i) => project?._id && (
                <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    {project?.image && (
                        <motion.img 
                              initial={{
                                y: -300,
                                opacity: 0,
                              }}
                              transition={{ duration: 1.2 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{once: true}}
                            src={urlFor(project.image)?.url()}
                            alt="Project Image"
                        />
                    )}
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">
                                Project {i + 1} of {projects.length}:
                            </span>{" "}
                            {project.title}
                        </h4>

                          <div className="flex items-center space-x-2 justify-center">
                            {project.technologies?.map(technology => technology?._id && (
                                <img 
                                    key={technology._id}
                                    className="h-10 w-10"
                                    src={urlFor(technology?.image)?.url()}
                                    alt="Technology Logo"
                                />
                            ))}
                          </div>
                            
                        <p className="text-lg text-center md:text-left">
                            {project.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

        </div>
    </motion.div>
  );
};

export default Projects;
