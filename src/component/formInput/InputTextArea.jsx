"use client";

import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

const InputTextArea = ({
  label,
  name,
  placeholder,
  register,
  error,
  required,
  validateWatch,
  trigger,
  rows = 4,
}) => {
  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;
  const minLength = 10;

  useEffect(() => {
    setCharCount(validateWatch?.length || 0);
    if (trigger && name) {
      trigger(name);
    }
  }, [validateWatch, trigger, name]);

  return (
    <div className="w-full space-y-2">
      <label
        className={`block text-lg font-semibold text-gray-700 dark:text-gray-200 `}
      >
        {label}
        <span className="text-red-500 dark:text-red-400">*</span>
      </label>
      <div className="relative">
        <textarea
          rows={rows}
          {...register(name, {
            ...(required && {
              required: `${name} is required`,
              minLength: {
                value: minLength,
                message: `Minimum ${minLength} characters required`,
              },
              maxLength: {
                value: maxLength,
                message: `Maximum ${maxLength} characters allowed`,
              },
              validate: {
                noLeadingSpace: (value) =>
                  /^[^\s].*$/.test(value) ||
                  "First character cannot be a space",
              },
            }),
          })}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          className={`bg-[#99a1af80] dark:bg-gray-900 w-full px-4 py-2 rounded-xl text-gray-950 dark:text-white border transition-all duration-300 outline-none    border-gray-600  placeholder:text-gray-600 dark:placeholder:text-gray-400 ${
            error
              ? "focus:border-red-400 focus:ring-1 focus:ring-red-500"
              : "focus:border-green-700 focus:ring-1 focus:ring-green-800"
          }  `}
        />
      </div>
      <div className="flex items-center justify-end">
        {/* {error && (
          <p className="text-red-500 dark:text-red-400">{error.message}</p>
        )} */}
        {charCount}/{maxLength} character
      </div>
    </div>
  );
};

export default InputTextArea;
