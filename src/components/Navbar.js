import React from "react";
import globe from "../img/worldwide.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={globe} alt="GLobe" className="navbar__image" />
      <span className="navbar__title">my travel journal</span>
    </div>
  );
}

export default Navbar;
