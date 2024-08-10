import { useEffect, useState } from "react";
import useMovie from "../../hooks/useMovie";
import hover_img from "../../assets/hover_img.png";

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
            className="flex relative min-h-[365px] min-w-[234px] "
            key={movie.id}
          >
            <img
              src={movie.thumbnail}
              alt={`${movie.title} image not found or broken`}
              className="rounded-md absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="z-10 relative w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 ease-in-out">
              <div className="bg-[#212224] absolute h-max w-max bottom-0 top-0 right-0 left-0 z-50 rounded-b-lg p-7 flex flex-col gap-4">
                <img
                  className="absolute inset-0 top-0 left-0 right-0 object-fill object-top rounded-t-lg"
                  src={hover_img}
                />
                <div className="bg-[#212224] absolute h-max w-max bottom-0 right-0 left-0 z-50 rounded-b-lg p-7 flex flex-col gap-4">
                  <p className="text-xs">{movie.title}</p>
                  <p className="text-xs">logo</p>
                  {index > 0 && (
                    <p className="text-xs font-normal text-center w-full">
                      {genre}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PosterCard;
