import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (hero) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.title === hero.title)) {
        return prevFavorites;
      }
      return [...prevFavorites, hero];
    });
  };

  const removeFromFavorites = (title) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.title !== title)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
