import React from "react";
import Link from "next/link";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <Link href={"#hero"}>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            src="https://avatars.githubusercontent.com/u/87092772"
            alt="Footer Logo"
          />
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
