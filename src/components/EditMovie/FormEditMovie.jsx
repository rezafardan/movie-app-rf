import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieById, editMovie } from "../../services/movieSlice";
import Button from "../AtomicComponent/Button";

const FormEditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.currentMovie);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [href, setHref] = useState("");
  const [extract, setExtract] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title || "");
      setYear(movie.year || "");
      setCast(movie.cast || []);
      setGenres(movie.genres || []);
      setHref(movie.href || "");
      setExtract(movie.extract || "");
      setThumbnail(movie.thumbnail || "");
    }
  }, [movie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Apakah kamu yakin akan merubah data film?")) {
      try {
        await dispatch(
          editMovie({
            id,
            updateData: { title, year, cast, genres, href, extract, thumbnail },
          })
        );
        alert("Update data berhasil");
        navigate("/moviedata");
      } catch (err) {
        console.error("Error updating movie:", err);
      }
    }
  };

  const handleBack = () => {
    navigate("/moviedata");
  };

  return (
    <div className="mt-24 md:mt-32 mx-[4%]">
      <div className="text-center text-2xl font-bold mb-4">
        <span>
          <Button onClick={handleBack}>Kembali</Button>
        </span>
        Edit Film
      </div>
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
        <Button type="submit" className="bg-slate-400 justify-center mb-4">
          Update Movie
        </Button>
      </form>
    </div>
  );
};

export default FormEditMovie;
