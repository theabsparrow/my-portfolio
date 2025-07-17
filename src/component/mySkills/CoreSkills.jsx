"use client";

import { useState } from "react";
import { techLogo } from "./mySkills.const";

const CoreSkills = () => {
  const [open, setOpen] = useState(false);
  const [startSpin, setStartSpin] = useState(false);
  const [speedSpin, setSpeedSpin] = useState(false);
  const [mediumSpin, setMediumSpin] = useState(false);
  console.log(startSpin);
  return (
    <div className="mt-8 md:mt-16 space-y-4">
      <h1 className="text-center text-4xl font-semibold">
        Core Skills & Technologies
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto font-medium">
        As a Full Stack Developer, I specialize in building modern web
        applications using a combination of powerful tools and technologies.
        From designing responsive interfaces to building scalable backend
        systems, here's what I work with every day.
      </p>
      <div className="hidden md:flex flex-col items-center justify-center min-h-screen lg:p-8 mt-10 relative">
        <div
          className={`lg:transform lg:-rotate-45  ${
            startSpin && "animate-spin spin-slow"
          } ${speedSpin && "animate-spin spin-fast"} ${
            mediumSpin && "animate-spin spin-medium"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center">
            {techLogo.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/40 dark:bg-gray-600 p-4 shadow-lg rounded-xl "
              >
                <div className="lg:transform lg:rotate-45 flex flex-col items-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="lg:w-24 h-16 mb-4"
                  />
                  <p className="text-lg dark:text-gray-950 font-semibold">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-4 absolute right-0 top-16">
          <button
            onClick={() => {
              setStartSpin(true);
              setSpeedSpin(false);
              setMediumSpin(false);
              setOpen(true);
            }}
            className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            start rotation
          </button>
          {open && (
            <>
              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(true);
                  setMediumSpin(false);
                }}
                className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
              >
                speed up
              </button>
              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(true);
                }}
                className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
              >
                speed medium
              </button>
              <button
                onClick={() => {
                  setStartSpin(true);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                }}
                className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
              >
                speed slow
              </button>
              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                  setOpen(false);
                }}
                className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
              >
                stop rotation
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
