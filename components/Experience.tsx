import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  const [properExperiences, setProperExperiences] = useState(experiences)

  /**
   * custom sort
   *  sort by started date
   *  and then put specific company as first while it's still as 'isCurrentlyWorking'
   */
  useEffect(() => {
    const customSortExperiences:Experience[] = []
  
    experiences
      ?.sort((a,b) => new Date(b.dateStarted)?.valueOf() - new Date(a.dateStarted)?.valueOf())
      ?.map(e => e.isCurrentlyWorkingHere && e.companyName?.match(/scale/i) ? customSortExperiences.unshift(e) : customSortExperiences.push(e))

    customSortExperiences.length > 0 ? setProperExperiences(customSortExperiences) : null
  }, []) 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbarPage">
        {properExperiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
