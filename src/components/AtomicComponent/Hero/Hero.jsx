import HeroCaption from "./HeroCaption";
import useMovie from "../../../hooks/useMovie";
import Loading from "../Loading";
import Error from "../Error";

const Hero = () => {
  const { movies, loading, error } = useMovie();

  if (loading) return <Loading />;
  if (error) return <Error error={error.message}></Error>;

  const firstMovie = movies[3];
  if (!firstMovie || !firstMovie.thumbnail) {
    return <Error>Error : 404 Not Found | Please reload your browser!</Error>;
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
