import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieById, editMovie } from "../../services/movieSlice";
import Button from "../AtomicComponent/Button";
import arrow_back from "../../assets/arrow_back.svg";

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
    <div className="mt-20 md:mt-32 px-[4%] md:mx-[8%]">
      <Button
        onClick={handleBack}
        className="bg-slate-400 justify-center px-4 text-xs"
      >
        <img src={arrow_back} alt="" className="w-3" />
        Batal
      </Button>
      <div className="text-center text-2xl font-bold mb-4">Edit Film</div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 border rounded-xl p-6 bg-gray-700">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-white"
            >
              Judul Film:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-white"
            >
              Tahun Film:
            </label>
            <input
              type="number"
              id="year"
              value={year}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Tahun film dibuat..."
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="cast"
              className="block mb-2 text-sm font-medium text-white"
            >
              Cast:
            </label>
            <input
              type="text"
              id="cast"
              value={cast}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Aktor/Aktris pemeran film..."
              onChange={(e) =>
                setCast(e.target.value.split(",").map((item) => item.trim()))
              }
              required
            />
          </div>

          <div>
            <label
              htmlFor="genres"
              className="block mb-2 text-sm font-medium text-white"
            >
              Genres:
            </label>
            <input
              type="text"
              id="genres"
              value={genres}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Genre film..."
              onChange={(e) =>
                setGenres(e.target.value.split(",").map((item) => item.trim()))
              }
              required
            />
          </div>

          <div>
            <label
              htmlFor="href"
              className="block mb-2 text-sm font-medium text-white"
            >
              Judul Film Referensi:
            </label>
            <input
              type="text"
              id="href"
              value={href}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Referensi judul film..."
              onChange={(e) => setHref(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="extract"
              className="block mb-2 text-sm font-medium text-white"
            >
              Deskripsi Film:
            </label>
            <textarea
              type="text"
              id="extract"
              value={extract}
              rows={4}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-2xl block w-full p-2.5"
              placeholder="Deskripsi lengkap tentang film..."
              onChange={(e) => setExtract(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="thumbnail"
              className="block mb-2 text-sm font-medium text-white"
            >
              Link Poster Film:{" "}
            </label>
            <input
              type="text"
              id="thumbnail"
              value={thumbnail}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Link poster film..."
              onChange={(e) => setThumnail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="bg-slate-400 justify-center mb-4">
            Ubah Data Film
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormEditMovie;
