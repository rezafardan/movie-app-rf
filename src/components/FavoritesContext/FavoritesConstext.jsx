import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.log(error);
    }
  }, [favorites]);

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
