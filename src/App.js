import "./index.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
    </div>
  );
}
