import "./App.css";
import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is matching</h1>
        <hr style={{ width: 450 }} />
      </>
    );
  } else {
    return (
      <>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is not matching</h1>
        <hr style={{ width: 450 }} />
      </>
    );
  }
};
export default SlotM;
