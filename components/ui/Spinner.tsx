import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-transparent border-t-blue-500  border-b-blue-800 border-l-violet-500 rounded-full animate-spin w-full h-full"></div>
        {/* <div className="absolute border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-green-500 border-l-red-500 rounded-full animate-spin-reverse w-2/3 h-2/3"></div> */}
      </div>
    </div>
  );
};

export default Spinner;
