import React from "react";
import "./card.css";


export default function Card(props) {

  const { name, min, max, img, onClose } = props

  return (
    <div className="card">
      <button onClick={onClose}>X</button>
      <h4>City: {name}</h4>
      <div className="card__div">
        <p>
          Min:{min}
        </p>
        <p>
          Max:{max}
        </p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="WeatherImg" />
      </div>
    </div>
  )}
