import "./index.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <Search />
      <div className="current-place">
        <div className="City">
          <h1>Kyiv</h1>
        </div>
        <div className="Time">
          Last updated: <span> Tuesday, 21:55</span>
        </div>
        <div>Cloudy</div>
      </div>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <div>
              <img
                alt="icon"
                width="60px"
                src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              />

              <span className="currentTemp">19</span>
              <span className="units">ºC</span>
            </div>
          </div>
          <div className="col-6">
            <div>Humidity: 80%</div>
            <div>Wind: 2 m/sec</div>
          </div>
        </div>
      </div>
    </div>
  );
}
