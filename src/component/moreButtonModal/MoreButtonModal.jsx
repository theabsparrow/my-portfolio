"use client";

import { IoIosArrowForward } from "react-icons/io";

const MoreButtonModal = () => {
  return (
    <>
      <button className="group  text-gray-900 dark:text-white hover:text-white hover:dark:text-purple-600 duration-500 flex items-center gap-2 py-2 px-2 hover:bg-gray-600 hover:dark:bg-[#c9c9ff99] rounded-xl cursor-pointer ">
        More{" "}
        <IoIosArrowForward className="transform transition-transform duration-300 group-hover:rotate-90" />
      </button>
    </>
  );
};

export default MoreButtonModal;
