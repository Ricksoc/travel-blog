import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data/data.js";

function App() {
  let count = 0;
  let key;

  function keyGenerator(n) {
    let s = "000" + n;
    return s.substring(s.length - 4);
  }

  const cards = data.map((entry) => {
    count++;
    key = keyGenerator(count);
    console.log(count, key);
    return <Card key={key} {...entry} />;
  });

  return (
    <div>
      <Navbar />
      <div className="section__cards">{cards}</div>
    </div>
  );
}

export default App;
