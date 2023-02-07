import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function formattedDate() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[weather.date.getDay()];
    let hours = weather.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = weather.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
  }

  if (weather.ready) {
    return (
      <div>
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control search-box"
                placeholder="The weather in..."
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-light shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form>
        <div className="current-place">
          <div className="City">
            <h1>{weather.city}</h1>
          </div>
          <div className="Time">
            Last updated: <span>{formattedDate()}</span>
          </div>
          <div className="text-capitalize">{weather.description}</div>
          <div className="weather">
            <div className="row">
              <div className="col-6">
                <div>
                  <img alt="icon" width="60px" src={weather.icon} />

                  <span className="currentTemp">{weather.temperature}</span>
                  <span className="units">ºC</span>
                </div>
              </div>
              <div className="col-6">
                <div>Humidity: {weather.humidity}%</div>
                <div>Wind: {weather.wind} m/sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const ApiKey = "e5472a0ed17ff5f3e2802e3b1bb3fa27";
    const units = "metric";
    const city = props.defaultCity;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
