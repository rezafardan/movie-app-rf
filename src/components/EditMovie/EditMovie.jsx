import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";

const EditMovie = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [href, setHref] = useState("");
  const [extract, setExtract] = useState("");
  const [thumbnail, setThumnail] = useState("");
  const navigate = useNavigate();
  const { getMovieById, editMovie } = useMovie();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await getMovieById(id);
        setTitle(movie.title);
        setYear(movie.year);
        setCast(movie.cast);
        setGenres(movie.genres);
        setHref(movie.href);
        setExtract(movie.extract);
        setThumnail(movie.thumbnail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [id, getMovieById]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editMovie(id, {
        title,
        year,
        cast,
        genres,
        href,
        extract,
        thumbnail,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            value={cast}
            onChange={(e) => setCast(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Genres:</label>
          <input
            type="text"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Href:</label>
          <input
            type="text"
            value={href}
            onChange={(e) => setHref(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Extract:</label>
          <input
            type="text"
            value={extract}
            onChange={(e) => setExtract(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Thumbnail:</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumnail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
