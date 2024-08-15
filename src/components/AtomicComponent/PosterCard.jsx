import { useEffect, useState } from "react";
import useMovie from "../../hooks/useMovie";
import hover_img from "../../assets/hover_img.png";
import HoverPoster from "./HoverPoster";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const PosterCard = () => {
  const [shuffleCards, setShuffleCards] = useState([]);
  const { movies, loading, error, removeMovie } = useMovie();

  useEffect(() => {
    const shuffledData = shuffleArray([...movies]);
    const limitedData = shuffledData.slice(0, 30);
    setShuffleCards(limitedData);
  }, [movies]);

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 min-w-96 text-center flex items-center justify-center">
          <p className="p-2 text-black">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="w-full h-full flex justify-center items-center animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 min-w-96 text-center flex items-center justify-center">
          <p className="py-2 text-black px-6">
            Error : {error.message} | Please reload your browser!
          </p>
        </div>
      </div>
    );

  return (
    <>
      {shuffleCards.map((movie, index) => {
        const genre = movie.genres
          ? movie.genres.map((g, i) => (
              <span key={i}>
                {g}
                {i < movie.genres.length - 1 ? "  •  " : ""}
              </span>
            ))
          : "";
        if (!movie.thumbnail) {
          return null;
        }
        return (
          <div
            className="flex relative min-h-[365px] min-w-[234px] cursor-pointer"
            key={movie.id}
          >
            <img
              src={movie.thumbnail}
              alt={`${movie.title} image not found or broken`}
              className="rounded-md absolute inset-0 object-cover object-center w-full h-full"
            />
            <HoverPoster
              src={hover_img}
              genre={movie.genre}
              index={index}
              title={movie.title}
            >
              {movie.title}
            </HoverPoster>
          </div>
        );
      })}
    </>
  );
};

export default PosterCard;
