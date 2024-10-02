import { useEffect, useState } from "react";
import useMovie from "../../../hooks/useMovie";
import HoverPoster from "./HoverPoster";
import Loading from "../Loading";
import Error from "../Error";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const PosterCard = () => {
  const [shuffleCards, setShuffleCards] = useState([]);
  const { movies, loading, error } = useMovie();

  useEffect(() => {
    const shuffledData = shuffleArray([...movies]);
    const limitedData = shuffledData.slice(0, 30);
    setShuffleCards(limitedData);
  }, [movies]);

  if (loading) return <Loading />;
  if (error) return <Error error={error.message}></Error>;

  return (
    <>
      {shuffleCards.map((movie) => {
        return (
          <div
            className="flex relative min-h-[195px] md:min-h-[365px] min-w-[145px] md:min-w-[234px] cursor-pointer"
            key={movie.id}
          >
            <img
              src={movie.thumbnail}
              alt={`${movie.title} image not found or broken`}
              className="rounded-md absolute inset-0 object-cover object-center w-full h-full"
            />
            {/* <HoverPoster src={movie.thumbnail} title={movie.title}>
              {movie.title}
            </HoverPoster> */}
          </div>
        );
      })}
    </>
  );
};

export default PosterCard;
