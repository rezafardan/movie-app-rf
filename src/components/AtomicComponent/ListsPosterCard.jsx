import React, { useRef } from "react";
import PosterCard from "./PosterCard";
import ScrollButtonListPoster from "./ScrollButtonListPoster";

const ListsPosterCard = ({ children }) => {
  const listRef = useRef(null);

  return (
    <div className="py-10 px-[5%] ">
      <h2 className="mb-8 font-bold text-2xl">{children}</h2>
      <div
        className="flex items-center gap-4 scroll-smooth no-scrollbar no-scrollbar::-webkit-scrollbar"
        ref={listRef}
      >
        <PosterCard />;
      </div>
    </div>
  );
};

export default ListsPosterCard;
