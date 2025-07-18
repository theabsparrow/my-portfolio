"use client";

import { useState } from "react";
import { techLogo } from "./mySkills.const";
import { PlayCircle, Timer, Gauge, TimerReset, Square } from "lucide-react";

const CoreSkills = () => {
  const [open, setOpen] = useState(false);
  const [startSpin, setStartSpin] = useState(false);
  const [speedSpin, setSpeedSpin] = useState(false);
  const [mediumSpin, setMediumSpin] = useState(false);
  console.log(startSpin);
  return (
    <div className="mt-8 md:mt-16 space-y-4 ">
      <h1 className="text-center text-2xl md:text-4xl font-semibold">
        Core Skills & Technologies
      </h1>
      <p className="md:text-lg text-center max-w-3xl mx-auto font-medium">
        As a Full Stack Developer, I specialize in building modern web
        applications using a combination of powerful tools and technologies.
        From designing responsive interfaces to building scalable backend
        systems, here's what I work with every day.
      </p>

      <div className="relative h-[70vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center md:mt-10 ">
        <div
          className={`transform -rotate-45 mt-20 md:mt-0 ${
            startSpin && "animate-spin spin-slow"
          } ${speedSpin && "animate-spin spin-fast"} ${
            mediumSpin && "animate-spin spin-medium"
          }`}
        >
          <div className="grid grid-cols-3 gap-2 md:gap-6 justify-center ">
            {techLogo.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/40 dark:bg-gray-500 p-3 md:p-4 shadow-lg rounded-xl "
              >
                <div className="transform rotate-45 flex flex-col items-center ">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className=" h-8 md:w-24 md:h-16 md:mb-4  "
                  />
                  <p className="text-sm md:text-lg dark:text-gray-950 font-semibold">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden grid grid-cols-3 gap-4  absolute left-2  top-6 ">
          <button
            onClick={() => {
              setStartSpin(true);
              setSpeedSpin(false);
              setMediumSpin(false);
              setOpen(true);
            }}
            className="flex items-center gap-2 px-2 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            <PlayCircle size={18} />
            Rotate
          </button>

          {open && (
            <>
              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(true);
                  setMediumSpin(false);
                }}
                className="flex items-center gap-2 px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                <Gauge size={18} />
                Fast
              </button>

              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(true);
                }}
                className="flex items-center gap-2 px-2 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition cursor-pointer"
              >
                <Timer size={18} />
                Medium
              </button>

              <button
                onClick={() => {
                  setStartSpin(true);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                }}
                className="flex items-center gap-2 px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                <TimerReset size={18} />
                Slow
              </button>

              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                  setOpen(false);
                }}
                className="flex items-center gap-2px-2 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                <Square size={18} />
                Stop
              </button>
            </>
          )}
        </div>
        <div className="hidden md:flex flex-col justify-start space-y-4 absolute right-0  top-16">
          <button
            onClick={() => {
              setStartSpin(true);
              setSpeedSpin(false);
              setMediumSpin(false);
              setOpen(true);
            }}
            className="flex items-center gap-2 mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            <PlayCircle size={18} />
            Rotate
          </button>

          {open && (
            <>
              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(true);
                  setMediumSpin(false);
                }}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                <Gauge size={18} />
                Speed Up
              </button>

              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(true);
                }}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition cursor-pointer"
              >
                <Timer size={18} />
                Medium
              </button>

              <button
                onClick={() => {
                  setStartSpin(true);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                }}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                <TimerReset size={18} />
                Slow
              </button>

              <button
                onClick={() => {
                  setStartSpin(false);
                  setSpeedSpin(false);
                  setMediumSpin(false);
                  setOpen(false);
                }}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                <Square size={18} />
                Stop
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
