import React, { useState } from "react";
import Hero from "../AtomicComponent/Hero";
import heros_data from "../../assets/heros/movies-2020s.json";
import "./FilmPage.css";
import ListsPosterCard from "../AtomicComponent/ListsPosterCard";

const FilmPage = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handlePrev = () => {
    setCurrentMovieIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : filteredMovies.length - 1;
    });
  };

  const handleNext = () => {
    setCurrentMovieIndex((prevIndex) => {
      return prevIndex < filteredMovies.length - 1 ? prevIndex + 1 : 0;
    });
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentMovieIndex(0);
  };

  const filteredMovies = selectedGenre
    ? heros_data.filter((movie) => movie.genres.includes(selectedGenre))
    : heros_data;

  const currentMovie = filteredMovies[currentMovieIndex];

  return (
    <div>
      <div className="genre-filter">
        <select onChange={handleGenreChange} value={selectedGenre}>
          {[...new Set(heros_data.flatMap((movie) => movie.genres))].map(
            (genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            )
          )}
        </select>
      </div>
      {currentMovie && (
        <Hero
          title={currentMovie.title}
          extract={currentMovie.extract}
          thumbnail={currentMovie.thumbnail}
          genres={currentMovie.genres}
        />
      )}
      <ListsPosterCard>Top Rating Film Hari Ini</ListsPosterCard>
      <ListsPosterCard>Film Trending</ListsPosterCard>
      <ListsPosterCard>Rilis Baru</ListsPosterCard>
    </div>
  );
};

export default FilmPage;
