import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import heros_data from "../../assets/heros/movies-2020s.json";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";
import play_icon from "../../assets/play_icon.svg";
import check_icon from "../../assets/check_icon.svg";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TitleCards = ({ title }) => {
  const listRef = useRef(null);
  const [shuffleCards, setShuffleCards] = useState([]);

  useEffect(() => {
    setShuffleCards(shuffleArray([...heros_data]));
  }, []);

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  return (
    <div className="titlecards">
      <h2>{title ? title : "Melanjutkan Tonton Film"}</h2>
      <div className="card-list" ref={listRef}>
        <button className="scroll-button left" onClick={scrollLeft}>
          <img src={arrow_left} alt="" />
        </button>
        {shuffleCards.map((hero, index) => {
          if (!hero.thumbnail) {
            return null;
          }
          return (
            <div className="card" key={index}>
              <img
                src={hero.thumbnail}
                alt={`${hero.title} image not found or broken`}
              />
              <p>{hero.title}</p>
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

export default TitleCards;
