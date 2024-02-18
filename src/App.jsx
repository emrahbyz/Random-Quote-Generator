import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [quotes, setQuotes] = useState("");
  const [color, setColor] = useState("purple");
  const test = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
    setColor(getRandomColor);
  };
  const getRandomColor = () => {
    const colors = ["purple", "green", "lime", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div className="App">
      <div style={{ backgroundColor: color }} className="textContainer">
        <p> {quotes.text} </p>
        <p> {quotes.author} </p>
        <button onClick={test}>Get quote</button>
      </div>
    </div>
  );
};

export default App;
