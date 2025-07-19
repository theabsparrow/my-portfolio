"use client";

import Image from "next/image";
import {
  usedTechLogo,
  usedtechLogoPart1,
  usedtechLogoPart2,
} from "./mySkills.const";
import Marquee from "react-fast-marquee";

const UsedTechnology = () => {
  return (
    <section className="space-y-4 md:space-y-0">
      <div className="space-y-8 mb-8">
        <h1 className="text-center text-2xl md:text-4xl font-semibold">
          Technologies I Use
        </h1>
        <p className="md:text-lg text-center max-w-3xl mx-auto font-medium">
          I work with a wide range of modern tools and technologies to build
          scalable, efficient, and user-friendly web applications. From UI
          frameworks to deployment platforms, these technologies help me deliver
          high-quality products across the full development stack.
        </p>
      </div>

      <Marquee speed={50} pauseOnHover>
        <div className="hidden md:flex items-center space-x-4 ml-4">
          {usedTechLogo.map((tech, index) => (
            <div
              key={index}
              className=" h-12 border rounded-xl flex items-center justify-center gap-3 px-3 py-2 bg-white dark:bg-gray-500"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-medium ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee speed={30} direction="right" pauseOnHover>
        <div className="md:hidden flex items-center space-x-4 ml-4">
          {usedtechLogoPart1.map((tech, index) => (
            <div
              key={index}
              className=" h-8 border rounded-xl flex items-center justify-center gap-3 px-3 py-2 bg-white/50 dark:bg-gray-600"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-medium ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={30} direction="left" pauseOnHover>
        <div className="md:hidden flex items-center space-x-4 ml-4">
          {usedtechLogoPart2.map((tech, index) => (
            <div
              key={index}
              className=" h-8 border rounded-xl flex items-center justify-center gap-3 px-3 py-2 bg-white/50 dark:bg-gray-600"
            >
              <div className="relative w-6 h-6">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-medium ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default UsedTechnology;
