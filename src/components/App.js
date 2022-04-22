import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div>
      <Navbar />
      <div className="section__cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
