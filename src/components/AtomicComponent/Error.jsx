import React from "react";

const Error = ({ error }) => {
  return (
    <div className="w-full h-full flex justify-center items-center animate-pulse">
      <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 min-w-96 text-center flex items-center justify-center">
        <p className="py-2 text-black px-6">
          Error : {error} | Please reload your browser!
        </p>
      </div>
    </div>
  );
};

export default Error;
