import React from "react";
import "./MyList.css";
import cards_data from "../../assets/cards/Cards_data";
import play_icon from "../../assets/play_icon.svg";
import check_icon from "../../assets/check_icon.svg";

const MyList = () => {
  return (
    <div className="mylistcards">
      <h2>Daftar Saya</h2>
      <div className="mylist-card">
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.poster} alt={card.name} />
              <p>{card.name}</p>
              <div className="card-info">
                <p>{card.name}</p>
                <div className="icons-preview">
                  <img src={play_icon} alt="" />
                  <img src={check_icon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyList;
