import React from "react";

export default function Temperature(props) {
  return (
    <span>
      <span className="currentTemp">{Math.round(props.cels)}</span>
      <span className="units"> ºC</span>
    </span>
  );
}
