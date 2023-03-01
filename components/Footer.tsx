import React from "react";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Footer = ({ pageInfo }: Props) => {
  const backupImage = "https://avatars.githubusercontent.com/u/87092772"

  return (
    <Link href={"#hero"}>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            src={urlFor(pageInfo?.heroImage)?.url() || backupImage}
            alt="Footer Logo"
          />
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
