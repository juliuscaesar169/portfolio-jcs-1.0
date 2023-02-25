import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = ({}: Props) => {
    const projects = [1, 2, 3, 4 ,5];

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
            {projects.map((project, i) => (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                          initial={{
                            y: -300,
                            opacity: 0,
                          }}
                          transition={{ duration: 1.2 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{once: true}}
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="Project Image"
                    />
                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">
                                Checking Project {i + 1} of {projects.length}:
                            </span>{" "}
                            Project-Title
                        </h4>
                        <p className="text-lg text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt quos voluptates quam deleniti nobis, dolores commodi sint architecto a praesentium velit, nesciunt quidem nisi perferendis, neque rerum hic aliquam?
                        </p>
                    </div>
                </div>
            ))}
            {/* projects */}
            {/* projects */}
            {/* projects */}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">

        </div>
    </motion.div>
  );
};

export default Projects;