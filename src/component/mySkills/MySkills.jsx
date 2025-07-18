"use client";
import { FaToolbox } from "react-icons/fa";
import CoreSkills from "./CoreSkills";
import UsedTechnology from "./UsedTechnology";

const MySkills = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-semibold md:font-bold flex items-center md:gap-10 justify-center">
        My Development Toolbox{" "}
        <span className="hidden md:flex">
          <FaToolbox />
        </span>
      </h1>
      <hr className="my-10 dark:border-gray-400 border-gray-700" />
      <CoreSkills />
      <hr className="mb-10 dark:border-gray-400 border-gray-700" />
      <UsedTechnology />
    </section>
  );
};

export default MySkills;
