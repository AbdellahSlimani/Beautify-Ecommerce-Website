import React from "react";
import "./Loader.css"

function Loader() {
  console.log("loader is here")
  return (
    <div className="container">
      <div id="bSquare"></div>
      <div id="bShadow"></div>
    </div>
  );
}

export default Loader;
