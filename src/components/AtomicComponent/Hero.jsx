import HeroCaption from "./HeroCaption";
import useMovie from "../../hooks/useMovie";

const Hero = () => {
  const { movies, loading, error } = useMovie();

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

  const firstMovie = movies[1];

  if (!firstMovie || !firstMovie.thumbnail) {
    return (
      <div className="w-full flex justify-center h-[80vh] items-center animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 min-w-96 text-center flex items-center justify-center">
          <p className="py-2 text-black px-6">
            Error : 404 Not Found | Please reload your browser!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative" key={firstMovie.id || firstMovie.title}>
        <img
          src={firstMovie.thumbnail}
          alt="Poster picture of movies unknow"
          className="w-full image-mask-linear object-cover h-[90vh]"
        />
        <HeroCaption title={firstMovie.title} extract={firstMovie.extract} />
      </div>
    </>
  );
};

export default Hero;
