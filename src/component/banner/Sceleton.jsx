export const SkeletonLoader = () => {
  const placeholders = Array.from({ length: 5 });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 mt-2 animate-pulse">
      {placeholders.map((_, idx) => (
        <div key={idx} className="flex items-center gap-2 text-xl px-2">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full" />

          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
