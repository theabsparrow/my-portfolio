"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const MoreButtonModal = () => {
  return (
    <section className="bg-[#c9c9ff] dark:bg-[#05092e] rounded-xl shadow-lg p-6 ">
      <h2 className="text-xl font-medium mb-4 flex items-center gap-4 dark:text-white text-black">
        Settings{" "}
      </h2>
      <p className="mb-4 dark:text-[rgba(255,255,255,0.7)] text-gray-700 text-xl font-normal">
        Here you can change your settings, like website theme or decorations.
      </p>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 dark:text-[rgba(255,255,255,0.7)] text-gray-700 text-xl font-normal">
          Theme
        </p>
      </div>
    </section>
  );
};

export default MoreButtonModal;
