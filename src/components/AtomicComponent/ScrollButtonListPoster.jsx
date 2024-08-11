import React, { useRef } from "react";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const ScrollButtonListPoster = ({ className = "", src }) => {
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
        className={`z-10 absolute bottom-[44%] p-2 border-[#E7E3FC] border-opacity-25 border-[1px] text-2xl bg-[#2F3334] rounded-full ${className}`}
      >
        <img
          src={src === "left" ? arrow_left : arrow_right}
          alt=""
          className="w-6 h-6"
        />
      </button>
    </>
  );
};

export default ScrollButtonListPoster;
