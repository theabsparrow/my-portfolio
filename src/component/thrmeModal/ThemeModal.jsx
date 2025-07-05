"use client";

import { Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import { IoIosArrowRoundForward } from "react-icons/io";

const ThemeModal = () => {
  const [themeModalOpen, setThemeMOdalOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setThemeMOdalOpen(false);
      }
    };

    if (themeModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [themeModalOpen]);

  return (
    <>
      <button
        onClick={() => setThemeMOdalOpen(true)}
        className="cursor-pointer"
      >
        {" "}
        <IoSettingsOutline className="dark:text-white text-gray-900 text-2xl transition-transform duration-500 hover:rotate-180" />
      </button>
      {themeModalOpen && (
        <section className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.2)] flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-[#c9c9ff] dark:bg-[#05092e] rounded-xl shadow-lg p-6 w-[90%] md:w-[30%] animate-fadeIn"
          >
            <h2 className="text-xl font-medium mb-4 flex items-center gap-4 dark:text-white text-black">
              <IoSettingsOutline className=" text-2xl" /> Settings{" "}
            </h2>
            <p className="mb-4 dark:text-[rgba(255,255,255,0.7)] text-gray-700 text-xl font-normal">
              Here you can change your settings, like website theme or
              decorations.
            </p>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 dark:text-[rgba(255,255,255,0.7)] text-gray-700 text-xl font-normal">
                <MdOutlineLightMode /> Theme
              </p>
              <div>
                <button className="px-2 py-2 flex items-center justify-between border border-gray-400 rounded-lg w-[30vw] md:w-[8vw] cursor-pointer hover:border-gray-600 duration-500 dark:text-[rgba(255,255,255,0.7)] text-gray-700 ">
                  <span className="flex items-center gap-2">
                    {" "}
                    <Sun /> Light
                  </span>{" "}
                  <RxDoubleArrowDown />
                </button>
              </div>
            </div>
            <div className="border border-t border-gray-400 mt-5"></div>
            <div className="flex items-center justify-between mt-4">
              <h1 className="flex items-center gap-1 dark:text-[rgba(255,255,255,0.7)] text-gray-700 ">
                <WiStars className="text-3xl" /> Display Decorations
              </h1>
              <div className="border border-gray-400 px-2 py-1 rounded-lg">
                <div
                  onClick={() => setEnabled(!enabled)}
                  className={`w-14 h-6  cursor-pointer
        flex items-center px-1 transition-colors duration-300 rounded-lg
        ${
          enabled
            ? "bg-white dark:bg-gray-700"
            : "bg-[#c9c9ff] dark:bg-gray-500"
        }`}
                >
                  <div
                    className={`w-4 h-5 bg-gray-700 dark:bg-white transition-transform duration-300 rounded
          ${enabled ? "translate-x-7" : "translate-x-1"}`}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setThemeMOdalOpen(false)}
                className="border border-gray-400 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-[rgba(255,255,255,0.7)] duration-500 px-2 py-1 rounded-xl flex items-center gap-2 cursor-pointer dark:text-[rgba(255,255,255,0.7)] text-gray-700 "
                aria-label="Close"
              >
                Close <IoIosArrowRoundForward className="text-3xl " />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ThemeModal;
