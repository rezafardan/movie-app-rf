import React from "react";
import { useFavorites } from "../FavoritesContext/FavoritesConstext";
import "./MyList.css";

const MyList = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemoveFromFavorites = (title) => {
    removeFromFavorites(title);
  };

  return (
    <div className="mylistcards">
      <h2>Daftar Saya</h2>
      <div className="mylist-card">
        {favorites.length > 0 ? (
          favorites.map((hero, index) => (
            <div className="card" key={index}>
              <img
                src={hero.thumbnail}
                alt={`${hero.title} image not found or broken`}
              />
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
          <p>Tidak ada film di daftar favorit Anda.</p>
        )}
      </div>
    </div>
  );
};

export default MyList;
