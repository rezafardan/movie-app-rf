import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../../services/movieSlice";
import HeroCaption from "./HeroCaption";
import Loading from "../Loading";
import Error from "../Error";

const Hero = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  const firstMovie = movies[0];
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
