import React, { useRef } from "react";
import "./ContinueCards.css";
import cards_data from "../../assets/cards/Cards_data";

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
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.preview} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContinueCards;
