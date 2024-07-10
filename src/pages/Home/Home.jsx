import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import information_outline from "../../assets/information_outline.svg";
import volume_off from "../../assets/volume_off.svg";
import TitleCards from "../../components/TitleCards/TitleCards";
import ContinueCards from "../../components/ContinueCards/ContinueCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <div>
            <p className="title">Duty After School</p>
            <p className="caption">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>
          <div className="hero-btn">
            <div className="btn-left">
              <button className="text start">Mulai</button>
              <button className="text info">
                <img src={information_outline} alt="" />
                Selengkapnya
              </button>
              <button className="icons">18+</button>
            </div>
            <button className="icons">
              <img src={volume_off} alt="" />
            </button>
          </div>
        </div>
      </div>
      <ContinueCards />
      <TitleCards title={"Top Rating Film dan Series Hari ini"} />
      <TitleCards title={"Film Trending"} />
      <TitleCards title={"Rilis Baru"} />
      <Footer />
    </div>
  );
};

export default Home;
