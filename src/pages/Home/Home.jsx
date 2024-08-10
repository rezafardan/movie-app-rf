import Hero from "../../components/AtomicComponent/Hero";
import ListsPosterCard from "../../components/AtomicComponent/ListsPosterCard";

const Home = () => {
  return (
    <>
      <Hero />
      <ListsPosterCard>Top Rating Film Hari Ini</ListsPosterCard>
      <ListsPosterCard>Film Trending</ListsPosterCard>
      <ListsPosterCard>Rilis Baru</ListsPosterCard>
    </>
  );
};

export default Home;
