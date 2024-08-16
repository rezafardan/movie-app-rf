import React from "react";
import { useFavorites } from "../FavoritesContext/FavoritesConstext";
import "./MyList.css";

const MyList = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemoveFromFavorites = (title) => {
    removeFromFavorites(title);
  };

  return (
    <div className="px-[4%] mt-24 mb-4">
      <h2>Daftar Saya</h2>
      <div className="mylist-card">
        {favorites.length > 0 ? (
          favorites.map((hero, index) => {
            hero.map((data) => {
              console.log(data);
              return (
                <div className="card" key={index}>
                  <img
                    src={data.thumbnail}
                    alt={`${data.title} image not found or broken`}
                  />
                  <p>{data.title}</p>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFromFavorites(hero.title)}
                  >
                    Hapus
                  </button>
                </div>
              );
            });
          })
        ) : (
          <p>Tidak ada film di daftar favorit Anda.</p>
        )}
      </div>
    </div>
  );
};

export default MyList;
