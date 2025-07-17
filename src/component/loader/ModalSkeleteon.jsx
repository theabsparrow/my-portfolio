"use client";

const ModalSkeleteon = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[300px] w-full px-4">
      <div className="w-full max-w-lg bg-[#e1e1e1] dark:bg-[#1f1f2f] p-6 md:p-8 rounded-lg shadow-xl space-y-4 animate-pulse">
        <div className="h-6 w-3/4 bg-gray-400 dark:bg-gray-700 rounded-md" />

        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md" />
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded-md" />
          <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded-md" />
        </div>

        <div className="flex gap-4 justify-between pt-4">
          <div className="h-10 w-28 bg-gray-400 dark:bg-gray-700 rounded-xl" />
          <div className="h-10 w-32 bg-gray-400 dark:bg-gray-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default ModalSkeleteon;
