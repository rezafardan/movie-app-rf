import React, { useRef } from "react";
import "./ContinueCards.css";
import cards_data from "../../assets/cards/Cards_data";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const ContinueCards = ({ title, category }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  return (
    <div className="titlecards-c">
      <h2>{title ? title : "Melanjutkan Tonton Film"}</h2>
      <div className="card-list-c" ref={listRef}>
        <button className="scroll-button left" onClick={scrollLeft}>
          <img src={arrow_left} alt="" />
        </button>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.preview} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
        <button className="scroll-button right" onClick={scrollRight}>
          <img src={arrow_right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ContinueCards;
