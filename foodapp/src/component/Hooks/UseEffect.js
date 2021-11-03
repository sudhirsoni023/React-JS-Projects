import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0); // useState Hook
  useEffect(() => {
    document.title = `Chats(${myNum})`; //useEffect Hook
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
      </div>
    </>
  );
};

export default UseEffect;
