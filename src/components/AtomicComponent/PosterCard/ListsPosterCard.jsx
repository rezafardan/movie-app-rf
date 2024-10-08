import React, { useRef } from "react";
import PosterCard from "./PosterCard";
import ScrollButtonListPoster from "./ScrollButtonListPoster";

const ListsPosterCard = ({ children }) => {
  const listRef = useRef(null);

  return (
    <div className="relative my-10 mx-[4%]">
      <ScrollButtonListPoster
        src="left"
        className="left-[-22px]"
        click="left"
        listRef={listRef}
      />
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
      <div
        className="flex items-center gap-4 relative scroll-smooth overflow-x-scroll overflow-y-hidden no-scrollbar no-scrollbar::-webkit-scrollbar"
        ref={listRef}
      >
        <PosterCard />;
      </div>
      <ScrollButtonListPoster
        src="right"
        className="right-[-22px]"
        click="right"
        listRef={listRef}
      />
    </div>
  );
};

export default ListsPosterCard;
