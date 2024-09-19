import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import Button from "../AtomicComponent/Button";

const NewMovie = () => {
  const [title, setTitle] = useState("");
  const [years, setYears] = useState("");

  const [extract, setExtract] = useState("");
  const [thumbnail, setThumnail] = useState("");
  const navigate = useNavigate();
  const { addMovie } = useMovie();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addMovie({
        title,
        years,
        extract,
        thumbnail,
      });
      alert("Data Berhasil di Submit");
      navigate("/moviedata");
    } catch (err) {
      console.log(`Error adding movie: ${err}`);
    }
  };

  return (
    <div className="mt-20 md:mt-32 px-[4%] md:mx-[8%]">
      <div className="text-center text-2xl font-bold mb-4">
        Tambahkan Film Baru
      </div>
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
              placeholder="Judul film..."
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
              onChange={(e) => setThumnail(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="bg-slate-400 justify-center mb-4">
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewMovie;
