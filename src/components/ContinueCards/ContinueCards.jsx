import React, { useRef } from "react";
import "./ContinueCards.css";
import { useFavorites } from "../FavoritesContext/FavoritesConstext";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const ContinueCards = ({ title, category }) => {
  const listRef = useRef(null);
  const { favorites, removeFromFavorites } = useFavorites();

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  const handleRemoveFromFavorites = (title) => {
    removeFromFavorites(title);
  };

  const showScrollButtons = favorites.length > 0;

  return (
    <div className="titlecards-c">
      <h2>{title ? title : "Daftar Film Favorite"}</h2>
      <div className="card-list-c" ref={listRef}>
        {showScrollButtons && (
          <button className="scroll-button left" onClick={scrollLeft}>
            <img src={arrow_left} alt="Scroll Left" />
          </button>
        )}
        {favorites.length > 0 ? (
          favorites.map((hero, index) => (
            <div className="card" key={index}>
              <img src={hero.thumbnail} />
              <p>{hero.title}</p>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromFavorites(hero.title)}
              >
                Hapus
              </button>
            </div>
          ))
        ) : (
          <p>Tidak ada film di daftar favorite Anda.</p>
        )}
        {showScrollButtons && (
          <button className="scroll-button right" onClick={scrollRight}>
            <img src={arrow_right} alt="Scroll Right" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContinueCards;
