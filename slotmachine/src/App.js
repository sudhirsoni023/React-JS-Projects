import React from "react";
import "./App.css";
import SlotM from "./SlotM";

function App() {
  return (
    <div className="App">
      <h1>
        🎰 Welcome To
        <span style={{ fontWeight: "bold" }}> Slot Machine Game 🎰</span>
      </h1>
      <hr style={{ width: 850 }} />
      <SlotM x="😃" y="😆" z="😃" />
      <SlotM x="🎅" y="🎅" z="🎅" />
      <SlotM x="😃" y="😆" z="😅" />
      <SlotM x="😆" y="😆" z="😆" />
    </div>
  );
}

export default App;
