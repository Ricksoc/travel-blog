import React from "react";
import mapPin from "../img/map-pin.png";
import Yosemite from "../img/Yosemite.jpg";

function Card(props) {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={Yosemite} alt="Yosemite Valley" />
        <div className="card__text">
          <span className="location">
            <img src={mapPin} alt="Map Pin" className="card__location__pin" />
            <span className="card__location__name">{props.location}</span>
            <a
              href={props.googleMapsUrl}
              className="card__location__link"
            >
              View on Google Maps
            </a>
          </span>
          <h1 className="card__name">{props.title}</h1>
          <h4 className="card__dates">{props.startDate} - {props.endDate}</h4>
          <p className="card__description">
            {props.description}
          </p>
        </div>
      </div>
      <hr className="card__break" />
    </div>
  );
}

export default Card;
