import { useEffect, useState } from "react";
import useMovie from "../../hooks/useMovie";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {shuffleCards.map((movie) => {
        if (!movie.thumbnail) {
          return null;
        }
        return (
          <div className="relative" key={movie.id}>
            <img
              src={movie.thumbnail}
              alt={`${movie.title} image not found or broken`}
              className="rounded-md h-[365px] min-w-[234px]"
            />
          </div>
        );
      })}
    </>
  );
};

export default PosterCard;
