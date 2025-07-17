"use client";
import { FaEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import emailjs from "@emailjs/browser";

const ConfirmationModal = ({ data, onEdit, onConfirm, onClose }) => {
  return (
    <div className=" relative flex items-center justify-center ">
      <button
        onClick={onClose}
        className="absolute top-2 right-6 text-lg cursor-pointer"
      >
        {" "}
        <RxCross1 />
      </button>

      <div className="bg-[#c9c9ff] dark:bg-[#05092e] p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg mx-4 space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Confirm Your Submission
        </h2>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <div>
            <strong>Name:</strong> {data.name}
          </div>
          <div>
            <strong>Email:</strong> {data.email}
          </div>
          <div className="flex items-start gap-1">
            <strong>Message:</strong>
            <p>{data.message}</p>
          </div>
        </div>

        <div className=" flex justify-between gap-4">
          <button
            onClick={onEdit}
            className="border border-gray-800 dark:border-gray-500 text-lg text-gray-900 dark:text-white hover:text-white hover:dark:text-purple-600 duration-500 flex items-center gap-2 py-2 px-2 hover:bg-gray-600 hover:dark:bg-[#c9c9ff99] rounded-xl cursor-pointer"
          >
            Edit
            <FaEdit />
          </button>
          <button
            onClick={onConfirm}
            className="border border-gray-800 dark:border-gray-500 text-lg text-gray-900 dark:text-white hover:text-white hover:dark:text-purple-600 duration-500 flex items-center gap-2 py-2 px-2 hover:bg-gray-600 hover:dark:bg-[#c9c9ff99] rounded-xl cursor-pointer"
          >
            Confirm
            <GiConfirmed className="text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
