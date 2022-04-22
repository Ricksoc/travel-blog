import React from "react";
import mapPin from "../img/map-pin.png";
import Yosemite from "../img/Yosemite.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card__image" src={Yosemite} alt="Yosemite Valley" />
      <div className="card__text">
        <span className="location">
          <img src={mapPin} alt="Map Pin" className="card__location__pin" />
          <span className="card__location__name">JAPAN</span>
          <a
            href="https://goo.gl/maps/aK44KRqTiK9gkLpz8"
            className="card__location__link"
          >
            View on Google Maps
          </a>
        </span>
        <h1 className="card__name">Yosemite</h1>
      </div>
    </div>
  );
}

export default Card;
