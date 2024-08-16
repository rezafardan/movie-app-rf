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
  const { movies, getMovieById, editMovie, removeMovie } = useMovie();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await getMovieById(id);
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
    if (window.confirm("Apakah kamu yakin akan merubah data film?")) {
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
    }
  };

  const handleRemove = async (id) => {
    if (window.confirm("Apakah kamu yakin akan menghapus film?")) {
      try {
        await removeMovie(id);
        alert("Hapus data berhasil");
      } catch (err) {
        console.log("Error deleting movie:", err);
      }
    }
  };

  const handleEdit = (movieId) => {
    navigate(`/edit-movie/${movieId}`);
  };

  return (
    <div className="mt-32 mx-[4%]">
      <div>
        <div className="text-center text-2xl font-bold mb-4">Daftar Film</div>
        <div className="shadow-md rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs text-gray-100 uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr
                  className="odd:bg-gray-900 even:dark:bg-gray-800 border-b border-gray-700"
                  key={movie.id}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap overflow-hidden text-ellipsis text-white max-w-44 md:max-w-full"
                  >
                    {movie.title}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-wrap text-white text-center"
                  >
                    <button
                      onClick={() => handleEdit(movie.id)}
                      className="bg-gray-700 px-3 mx-2"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        await handleRemove(movie.id);
                      }}
                      className="bg-gray-700 px-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-20 md:mt-32">
        <div className="text-center text-2xl font-bold mb-4">Edit Film</div>
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

            <Button type="submit" className="bg-slate-400 justify-center mb-4">
              Update Movie
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
