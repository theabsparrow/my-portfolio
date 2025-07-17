"use client";

import GithubState from "./GithubState";
import { CiGlobe } from "react-icons/ci";
import { LuRocket } from "react-icons/lu";

const Banner = () => {
  return (
    <section className=" mt-[84px]">
      <div className="relative md:h-[85vh] bg-[url('/my-image.webp')] bg-cover bg-center bg-no-repeat flex items-start justify-end rounded-3xl overflow-hidden shadow-xl p-4 md:py-10 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/80 z-10 " />
        <div className="relative z-10">
          <div className="space-y-2 md:space-y-6">
            <p className="text-white flex items-center md:justify-end gap-2 md:text-xl">
              <CiGlobe /> ABOUT ME
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-white flex items-center md:justify-end gap-2">
              hey, I'm Bashar 👋
            </h1>
            <p className="flex justify-end">
              <span className="text-white text-lg hidden md:block">
                Passionate FullStack Web Developer from Bangladesh, <br />{" "}
                pushing the boundaries of web technology to create <br />{" "}
                immersive digital experiences.
              </span>
              <span className="text-white text-lg md:hidden">
                Passionate FullStack Web Developer from Bangladesh, pushing the
                boundaries of web technology to create immersive digital
                experiences.
              </span>
            </p>
          </div>
          <div className=" text-white text-lg md:text-xl backdrop-blur-sm bg-black/40 p-3 md:p-6 rounded-xl space-y-2 md:space-y-8 mt-10 md:mt-24">
            <h1 className=" text-white flex  gap-2">
              <LuRocket /> MY MISSION
            </h1>
            <p className=" flex items-start justify-end">
              <span className="hidden md:block">
                Bridging the Gap Between Design and <br /> Development: Where
                creativity meets <br /> functionality, and innovation drives
                progress.
              </span>
              <span className="md:hidden">
                Bridging the Gap Between Design and Development: Where
                creativity meets functionality, and innovation drives progress.
              </span>
            </p>
            <em>Keep moving, don't settle. 🚀</em>
          </div>
        </div>
      </div>
      <GithubState />
    </section>
  );
};

export default Banner;
