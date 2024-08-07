import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import "./NewMovie.css";

const NewMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [href, setHref] = useState("");
  const [extract, setExtract] = useState("");
  const [thumbnail, setThumnail] = useState("");
  const navigate = useNavigate();
  const { addMovie } = useMovie();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addMovie({ title, year, cast, genres, href, extract, thumbnail });
      <p>Done</p>;
    } catch (err) {
      console.log(`Error adding movie: ${err}`);
    }
  };

  return (
    <div className="addmovie-container">
      <h2>Add New Movie</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Judul Film: </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Judul film..."
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="year">Tahun Film: </label>
          <input
            type="number"
            id="year"
            value={year}
            placeholder="Tahun film dibuat..."
            onChange={(e) => setYear(e.target.value)}
            required
          />

          <label htmlFor="cast">Cast: </label>
          <input
            type="text"
            id="cast"
            value={cast}
            placeholder="Aktor/Aktris pemeran film..."
            onChange={(e) => setCast(e.target.value)}
            required
          />

          <label htmlFor="genres">Genres: </label>
          <input
            type="text"
            id="genres"
            value={genres}
            placeholder="Genre film..."
            onChange={(e) => setGenres(e.target.value)}
            required
          />

          <label htmlFor="href">Judul Film Referensi: </label>
          <input
            type="text"
            id="href"
            value={href}
            placeholder="Referensi judul film..."
            onChange={(e) => setHref(e.target.value)}
            required
          />

          <label htmlFor="extract">Deskripsi Film: </label>
          <input
            type="text"
            id="extract"
            value={extract}
            placeholder="Deskripsi lengkap tentang film..."
            onChange={(e) => setExtract(e.target.value)}
            required
          />

          <label htmlFor="thumbnail">Link Poster Film: </label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            placeholder="Link poster film..."
            onChange={(e) => setThumnail(e.target.value)}
            required
          />

          <button type="submit">Simpan</button>
        </form>
      </div>
    </div>
  );
};

export default NewMovie;
