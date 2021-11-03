import React, { useState } from "react";
import "./App.css";
const App = () => {
  let time = new Date().toLocaleTimeString().toString();
  const [Ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString().toString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div>
      <h1>Current Time in Digital Clock Format Is: </h1>
      <h1>{time}</h1>
    </div>
  );
};

export default App;
