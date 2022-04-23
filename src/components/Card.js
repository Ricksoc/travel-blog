import React from "react";
import mapPin from "../img/map-pin.png";
import Yosemite from "../img/Yosemite.jpg";

function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="card__content">
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
          <h4 className="card__dates">25 May, 2014 - 11 Junes, 2014</h4>
          <p className="card__description">
            We spent three days in California's Yosemite national park as part
            of a road trip. It is still one the our favourite places to have
            ever visited with a particular highlight being the trek we did down
            from Glacier Point
          </p>
        </div>
      </div>
      <hr className="card__break" />
    </div>
  );
}

export default Card;
