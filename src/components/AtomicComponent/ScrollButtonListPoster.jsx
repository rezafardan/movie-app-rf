import React, { useRef } from "react";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const ScrollButtonListPoster = ({ src }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={scrollLeft}>
        <img src={src} alt="" />
      </button>
    </div>
  );
};

export default ScrollButtonListPoster;
