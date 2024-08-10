import React, { useRef } from "react";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const ScrollButtonListPoster = () => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollLeft}
        className="z-10 absolute bottom-2/4 p-2 border-white border-2 text-2xl bg-slate-800 rounded-full"
      >
        <img src={arrow_left} alt="" className="w-6 h-6" />
      </button>
    </>
  );
};

export default ScrollButtonListPoster;
