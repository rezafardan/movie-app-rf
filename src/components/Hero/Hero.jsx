import React from "react";
import "./Hero.css";
import information_outline from "../../assets/information_outline.svg";
import volume_off from "../../assets/volume_off.svg";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_right.svg";

const Hero = ({ title, extract, thumbnail, genres, onPrev, onNext }) => {
  if (!thumbnail || !extract) {
    return null;
  }

  return (
    <div>
      <div className="hero">
        <button className="hero-button-nav left" onClick={onPrev}>
          <img src={arrow_left} alt="" />
        </button>
        <img
          src={thumbnail}
          alt="Poster picture of movies unknow"
          className="banner-img"
        />
        <div className="hero-caption">
          <div>
            <p className="title">{title}</p>
            <p className="caption">{extract}</p>
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
        <button className="hero-button-nav right" onClick={onNext}>
          <img src={arrow_right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
