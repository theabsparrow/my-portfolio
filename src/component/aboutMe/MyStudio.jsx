"use client";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

const MyStudio = () => {
  return (
    <section className="bg-gray-950 rounded-xl p-4 md:p-8">
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-white/75 flex items-center text-xl gap-2 font-semibold">
          <span className="text-2xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-1 rounded-lg">
            <FaCode />
          </span>{" "}
          MY STUDIO
        </h1>
        <p className="text-white text-xl md:text-2xl ">
          Hello 🖐, Bashar.dev is more than a portfolio; it's a window into my
          world, where passion meets purpose. Discover my work.
        </p>
      </div>
      <div className="mt-3 md:mt-6 flex ">
        <Link
          href={`${process.env.NEXT_PUBLIC_RESUME_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 bg-gray-800 border border-gray-700 px-4 py-2 rounded-2xl text-lg font-medium"
        >
          Download CV
        </Link>
        <button className="text-white/90 bg-gray-800 border border-gray-700 px-4 py-2 rounded-2xl text-lg font-medium hidden">
          Download CV
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-3 md:mt-6">
        <div className="bg-[#1a1a1a] p-4 rounded-xl space-y-1">
          <h1>
            <FaLaptopCode className="text-purple-400 text-3xl" />
          </h1>
          <h1 className="text-white text-xl font-semibold">Web Development</h1>
          <p className="text-white/60">
            Building high-performance websites with clean code and strong SEO
            fundamentals.
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-xl space-y-1">
          <h1>
            <FaPaintBrush className="text-purple-400 text-3xl" />
          </h1>
          <h1 className="text-white text-xl font-semibold">UI/UX Design</h1>
          <p className="text-white/60">
            Crafting modern, intuitive user interfaces that engage and convert
            users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStudio;
