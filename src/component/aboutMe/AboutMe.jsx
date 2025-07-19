"use client";
import Link from "next/link";
import { aboutMeParagraph } from "./aboutMe.const";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import MyStudio from "./MyStudio";

const AboutMe = () => {
  return (
    <section className=" flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-3 md:space-y-5">
        <h1 className="text-2xl md:text-3xl font-bold">About Me.</h1>
        <p className="flex flex-col space-y-2 md:space-y-5 text-lg md:text-xl">
          {aboutMeParagraph.map((para, i) => (
            <span key={i}>{para.paragraph}</span>
          ))}
        </p>
        <div className="flex items-center justify-between md:justify-start md:gap-8">
          <Link
            href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white md:text-lg bg-blue-600 p-1 md:p-2 flex items-center gap-1 md:gap-2 rounded-lg font-semibold hover:bg-blue-800 md:hover:gap-3 duration-500"
          >
            {" "}
            <span className="text-2xl">
              {" "}
              <FaGithub />
            </span>{" "}
            View my Github{" "}
            <span className="text-3xl">
              <IoIosArrowRoundForward />
            </span>
          </Link>
          <Link
            href="/contactMe"
            className=" md:text-lg p-1 md:p-2 flex items-center gap-1 md:gap-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg font-semibold md:hover:gap-3 duration-500"
          >
            Contact me{" "}
            <span className="text-3xl">
              <IoIosArrowRoundForward />
            </span>
          </Link>
        </div>
      </div>
      <MyStudio />
    </section>
  );
};

export default AboutMe;
