import React from "react";
import "./card.css";

export default function Card(props) {
  const { data, onClose } = props;
  let { description, wind, temp, weather, country, name, min, max, img, lat, lon } = data;

  return (
    <div className="card">
      <button onClick={onClose}>X</button>
      <h4>{name + " - " + country}</h4>
      <h6>
        Lat ({lat}) - Lon ({lon})
      </h6>
      <div className="card__div">
        <p>Temp: {temp} ºC</p>
      </div>
      <div className="card__div">
        <p>{temp === min ? null : "Min: " + min + "ºC"}</p>
        <p>{temp === max ? null : "Min: " + max + "ºC"}</p>
      </div>
      <div className="card__div_c">
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="WeatherImg"
        />
        <div className="card__div">
        <p>{weather+" -"}</p>
        <p>{"- "+description}</p>
        </div>
      </div>
      <p>Wind: {wind+" m/s"}</p>
    </div>
  );
}
