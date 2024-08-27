import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMovieById,
  removeMovie,
} from "../../services/movieSlice";

const MovieData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
    if (id) {
      dispatch(fetchMovieById(id));
    }
  }, [id, dispatch]);

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
    <div className="mt-24 md:mt-32 mx-[4%]">
      <div className="text-center text-2xl font-bold mb-4">Daftar Film</div>
      <div className="shadow-md rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs text-gray-100 uppercase bg-gray-700">
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
            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="odd:bg-gray-900 even:dark:bg-gray-800 border-b border-gray-700"
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  {movie.title}
                </td>
                <td className="px-6 py-4 font-medium text-center">
                  <button
                    onClick={() => handleEdit(movie.id)}
                    className="bg-gray-700 px-3 mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemove(movie.id)}
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
  );
};

export default MovieData;
