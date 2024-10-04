import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchMovieById,
  editMovie,
  fetchMovies,
} from "../../slices/movieSlice";
import Button from "../AtomicComponent/Button";
import arrow_back from "../../assets/arrow_back.svg";

const FormEditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.currentMovie);

  const [title, setTitle] = useState("");
  const [years, setYears] = useState("");
  const [extract, setExtract] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title || "");
      setYears(movie.years || "");
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
            updateData: {
              title,
              years,
              extract,
              thumbnail,
            },
          })
        );
        alert("Update data berhasil");
        navigate("/moviedata");
        await dispatch(fetchMovies());
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
              htmlFor="years"
              className="block mb-2 text-sm font-medium text-white"
            >
              Tahun Film:
            </label>
            <input
              type="number"
              id="years"
              value={years}
              className="bg-transparent border border-gray-300 text-white text-sm rounded-full block w-full p-2.5"
              placeholder="Tahun film dibuat..."
              onChange={(e) => setYears(e.target.value)}
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
              onChange={(e) => setThumbnail(e.target.value)}
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
