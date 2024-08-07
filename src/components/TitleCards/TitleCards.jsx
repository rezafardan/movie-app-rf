import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";
import favorite from "../../assets/favorite.svg";
import { useFavorites } from "../FavoritesContext/FavoritesConstext";
import useMovie from "../../hooks/useMovie";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TitleCards = ({ title }) => {
  const listRef = useRef(null);
  const [shuffleCards, setShuffleCards] = useState([]);
  const { addToFavorites } = useFavorites();
  const { movies, loading, error, removeMovie } = useMovie();

  useEffect(() => {
    const shuffledData = shuffleArray([...movies]);
    const limitedData = shuffledData.slice(0, 30);
    setShuffleCards(limitedData);
  }, [movies]);

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -968, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 968, behavior: "smooth" });
  };

  const handleAddToFavorites = (hero) => {
    addToFavorites(hero);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="titlecards">
      <h2>{title ? title : "Melanjutkan Tonton Film"}</h2>
      <div className="card-list" ref={listRef}>
        <button className="scroll-button left" onClick={scrollLeft}>
          <img src={arrow_left} alt="" />
        </button>
        {shuffleCards.map((movie) => {
          if (!movie.thumbnail) {
            return null;
          }
          return (
            <div className="card" key={movie.id}>
              <img
                src={movie.thumbnail}
                alt={`${movie.title} image not found or broken`}
              />
              <p>{movie.title}</p>
              <div
                className="favorite-icon"
                onClick={() => handleAddToFavorites(movie)}
              >
                <div>{movie.title}</div>
                <Link to={`/edit-movie/${movie.id}`}>Edit</Link>
                <img src={favorite} alt="" />
              </div>
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
