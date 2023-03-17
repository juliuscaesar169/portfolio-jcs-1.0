import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const [startingDate, setStartingDate] = useState('')
  const [endingDate, setEndingDate] = useState('')
  const [workedTime, setWorkedTime] = useState('')

  /**
   * format dates (MMM YYYY)
   * get worked time
   */
  useEffect(() => {
    const dateStarted = new Date(experience?.dateStarted)
    const dateEnded = new Date(experience?.dateEnded)
    const referenceDate = dateEnded && !isNaN(dateEnded.getMonth()) ? dateEnded : new Date()

    const monthDiff = referenceDate?.getMonth() - dateStarted?.getMonth() + (12 * (referenceDate?.getFullYear() - dateStarted?.getFullYear())) + 1 || 0
    const yearDiff = Math.floor(monthDiff / 12) || 0

    let periodWorked = ''
    //set years
    switch (true) {
      case yearDiff > 1:
        periodWorked += `${yearDiff} yrs `;
        break
      case yearDiff === 1:
        periodWorked += `${yearDiff} yr `;
        break
      default:
        break;
    }

    // set months
    switch (true) {
      case monthDiff % 12 === 1:
        periodWorked += `${monthDiff % 12} mo`;
        break
      case monthDiff % 12 > 1:
        periodWorked += `${monthDiff % 12} mos`;
        break
      default:
        break;
    }

    setStartingDate(dateStarted?.toLocaleString('en-us',{month:'short', year:'numeric'}))
    setEndingDate(dateEnded?.toLocaleString('en-us',{month:'short', year:'numeric'}))
    setWorkedTime(periodWorked)
  },[])

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage)?.url()}
        alt="Experience Card"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-ligth">{experience?.jobTitle} | {experience?.companyName}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.location}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map(technology => technology?.image && (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image)?.url()}
              alt="Technology Logo"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {startingDate} —{" "}
          {experience?.isCurrentlyWorkingHere
          ? "Present" 
          : endingDate} ·{" "}
          {workedTime}
        </p>

        <ul className="list-disc space-y-4 ml5 text-lg">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
