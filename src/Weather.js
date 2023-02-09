import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const ApiKey = "e5472a0ed17ff5f3e2802e3b1bb3fa27";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control search-box"
                placeholder="The weather in..."
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <Forecast coord={weather.coord} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
