import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import ContinueCards from "../../components/ContinueCards/ContinueCards";
import Hero from "../../components/Hero/Hero";
import heros_data from "../../assets/heros/movies-2020s.json";
import ListsPosterCard from "../../components/AtomicComponent/ListsPosterCard";

const Home = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    chooseRandomFilm();
  }, []);

  const chooseRandomFilm = () => {
    const randomIndex = Math.floor(Math.random() * heros_data.length);
    setCurrentHeroIndex(randomIndex);
  };

  const handlePrev = () => {
    setCurrentHeroIndex((prevIndex) =>
      prevIndex === 0 ? heros_data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentHeroIndex((prevIndex) =>
      prevIndex === heros_data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentHeroData = heros_data[currentHeroIndex];

  return (
    <div className="home">
      <Navbar />
      <Hero
        title={currentHeroData.title}
        extract={currentHeroData.extract}
        thumbnail={currentHeroData.thumbnail}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <ContinueCards />
      <ListsPosterCard>Top Rating Film Hari Ini</ListsPosterCard>
      <ListsPosterCard>Film Trending</ListsPosterCard>
      <ListsPosterCard>Rilis Baru</ListsPosterCard>
    </div>
  );
};

export default Home;
