import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center animate-pulse md:mt-80">
      <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 min-w-96 text-center flex items-center justify-center">
        <p className="p-2 text-black">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
