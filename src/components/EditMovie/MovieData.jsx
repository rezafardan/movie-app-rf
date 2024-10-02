import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMovieById,
  removeMovie,
} from "../../services/movieSlice";
import Button from "../AtomicComponent/Button";

const MovieData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies); // Semua data film dari state

  const [title, setTitle] = useState("");
  const [years, setYears] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetchMovies();
  }, [title, years, sortBy, order, dispatch]);

  const handleFetchMovies = () => {
    setError("");

    dispatch(fetchMovies({ title, years, sortBy, order }))
      .unwrap()
      .catch((err) => {
        console.log(err);
        setError("Terjadi kesalahan saat memuat data");
      });
  };

  const handleEdit = (id) => {
    navigate(`/formedit/${id}`);
  };

  const handleRemove = async (id) => {
    if (window.confirm("Apakah anda yakin akan menghapus film ?")) {
      try {
        await dispatch(removeMovie(id));
        alert("Hapus film berhasil");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mt-20 md:mt-32 px-[4%] md:mx-[8%]">
      <div className="text-center text-2xl font-bold mb-4">Daftar Film</div>
      <input
        type="text"
        placeholder="Cari film berdasarkan judul..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-2 border rounded-md w-full md:w-1/2 text-black"
      />
      <input
        type="text"
        placeholder="Cari film berdasarkan tahun..."
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="mb-4 p-2 border rounded-md w-full md:w-1/2 text-black"
      />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="title">Judul</option>
        <option value="years">Tahun</option>
      </select>
      <select
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className="border rounded px-2 py-1 mx-2"
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/*  */}
      <table className="w-full text-sm text-gray-400 mb-4">
        <thead className="text-xs text-gray-100 uppercase bg-gray-700 ">
          <tr>
            <th scope="col" className="px-2 py-3 rounded-tl-xl">
              Judul
            </th>
            <th scope="col" className="px-2 py-3 rounded-tr-xl">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <tr
                key={movie.id}
                className="odd:bg-gray-900 even:dark:bg-gray-800 border-b border-gray-700"
              >
                <td className="px-4 py-4 w-9/12 font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-12 text-white">
                  {movie.title}
                </td>
                <td className="px-4 py-4 font-medium text-center">
                  <div className="flex gap-1 w-full items-center justify-center">
                    <Button
                      onClick={() => handleEdit(movie.id)}
                      className="bg-[#192DB7] font-bold text-white hover:bg-[#CDF1FF] hover:text-[#192DB7] hover:outline-4 hover:outline-[#192DB7] px-4 mx-2"
                    >
                      Ubah
                    </Button>
                    <Button
                      onClick={() => handleRemove(movie.id)}
                      className="bg-[#FF5B3A] px-4 text-white hover:bg-[#FFEAD780] active:outline-offset-[2px] active:outline-[#FF5B3A]"
                    >
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center py-4 text-white">
                Tidak ada film ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieData;
