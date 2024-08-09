import favorite from "../../assets/favorite.svg";
import React from "react";
import { useFavorites } from "../FavoritesContext/FavoritesConstext";

const HoverPoster = () => {
  const { addToFavorites } = useFavorites();

  const handleAddToFavorites = (hero) => {
    addToFavorites(hero);
  };

  return (
    <div>
      <p className="absolute bottom-1 left-2"></p>;<div>{movie.title}</div>
      <img
        src={favorite}
        alt=""
        onClick={() => handleAddToFavorites(movie)}
        className="w-5 h-5 cursor-pointer"
      />
    </div>
  );
};

export default HoverPoster;
