import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");
  const far = props.cels * 1.8 + 32;

  function convertToFar(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <span>
        <span className="currentTemp">{Math.round(props.cels)}</span>
        <span className="units">
          {" "}
          ºC |{" "}
          <a href="/" onClick={convertToFar}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="currentTemp">{Math.round(far)}</span>
        <span className="units">
          <a href="/" onClick={convertToCel}>
            {" "}
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
