import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./FerecastDay";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);

  function getForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  if (ready) {
    return (
      <div className="row mt-4">
        {forecast.map(function (daylyforecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                {" "}
                <ForecastDay data={daylyforecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = `7d478f69e1b2f5d563653f13f5f91d76`;
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecast);
    return null;
  }
}
