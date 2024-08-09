import React, { useRef } from "react";
import PosterCard from "./PosterCard";
import ScrollButtonListPoster from "./ScrollButtonListPoster";

const ListsPosterCard = ({ children }) => {
  const listRef = useRef(null);

  return (
    <div className="my-10 py-0 px-[5%] relative">
      <h2 className="mb-8">{children}</h2>
      <div
        className="flex item center gap-3 overflow-scroll scroll-smooth "
        ref={listRef}
      >
        <ScrollButtonListPoster />
        <PosterCard />;
        <ScrollButtonListPoster />
      </div>
    </div>
  );
};

export default ListsPosterCard;
