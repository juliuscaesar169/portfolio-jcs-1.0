import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as TSkill } from "@/typings";

type Props = {
  skills: TSkill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="sectionHeader">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 sm:gap-5 mt-12">
        {skills?.map((skill, i) => (
          <Skill key={skill._id} skill={skill} directionLeft={skills.length / 2 > i} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
