import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import "./EditMovie.css";
import Button from "../AtomicComponent/Button";

const EditMovie = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [href, setHref] = useState("");
  const [extract, setExtract] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();
  const { movies, getMovieById, editMovie } = useMovie();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log("Fetching movie with ID:", id); // Debugging log
        const movie = await getMovieById(id);
        console.log("Fetched movie data:", movie); // Debugging log
        if (movie) {
          setTitle(movie.title || "");
          setYear(movie.year || "");
          setCast(movie.cast || []);
          setGenres(movie.genres || []);
          setHref(movie.href || "");
          setExtract(movie.extract || "");
          setThumbnail(movie.thumbnail || "");
        }
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    };

    fetchMovie();
  }, [movies, id, getMovieById]);

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
      alert("Update data berhasil");
    } catch (err) {
      console.log("Error updating movie:", err);
    }
  };

  const handleEdit = (movieId) => {
    navigate(`/edit-movie/${movieId}`);
  };

  return (
    <div className="mt-32 mx-[5%]">
      <div className="movie-list-container">
        <h2>Daftar Film</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>
                  <Button
                    onClick={() => handleEdit(movie.id)}
                    className="px-4 bg-black"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="addmovie-container">
        <h2>Edit Movie</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label>Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />

            <label>Cast:</label>
            <input
              type="text"
              value={cast.join(", ")}
              onChange={(e) =>
                setCast(e.target.value.split(",").map((item) => item.trim()))
              }
              required
            />

            <label>Genres:</label>
            <input
              type="text"
              value={genres.join(", ")}
              onChange={(e) =>
                setGenres(e.target.value.split(",").map((item) => item.trim()))
              }
              required
            />

            <label>Href:</label>
            <input
              type="text"
              value={href}
              onChange={(e) => setHref(e.target.value)}
              required
            />

            <label>Extract:</label>
            <textarea
              type="text"
              value={extract}
              onChange={(e) => setExtract(e.target.value)}
              required
            ></textarea>

            <label>Thumbnail:</label>
            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
            />

            <Button type="submit" className="justify-center">
              Update Movie
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
