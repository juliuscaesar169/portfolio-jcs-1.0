import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const backupHeroImage = 'https://avatars.githubusercontent.com/u/87092772'

  const [text] = useTypewriter({
    words: [
      `Hey! It's ${pageInfo?.name?.replace(/\s+\S*$/,'') || 'Julio Cesar'}`,
      "Or in English, Julius Caesar :)",
      "<FullStackDeveloper />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
            src={urlFor(pageInfo.heroImage)?.url() || backupHeroImage} 
            alt={"Hero Picture"} 
            className={"relative rounded-full h-32 w-32 mx-auto object-cover"}/>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            {pageInfo?.role}
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold px-10 mt-2 sm:mt-0">
            <span>{text}</span>
            <Cursor cursorColor="F7AB0A" />
        </h1>
        <div className="pt-5">
            <Link href={"#about"}>
                <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
                <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
                <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
                <button className="heroButton">Projects</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
