import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [forecast, setForecast] = useState();

  function getForecast() {
    setForecast({
      icon: "01n",
      tempMax: 15,
      tempMin: 8,
    });
  }

  let apiKey = `017d56650cd168d68067850318775d43`;
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getForecast);

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="mb-1">Thu</div>
        <WeatherIcon code={"01d"} size={30} />
        <div className="forecast-day-temp">
          <span className="me-1">19º</span>
          <span className="text-muted">10º</span>
        </div>
      </div>
    </div>
  );
}
