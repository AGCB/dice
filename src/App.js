import "./App.css";
import React, { useState } from "react";

const defaultTrick = {
  direction: "ao",
  spinIn: 0,
  orientation: "forward",
  spinOut: 540,
  outDirection: "true",
  soulPosition: "top",
  trick: "x",
  soulGroove: "soul",
};

function App() {
  let [currentTrick, setCurrentTrick] = useState(defaultTrick);
  const handleClick = () => {
    var a = 42;
    console.log(`dog cat ${a}`);

    let obj = {};
    let outputString = "";
    let randomizer = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    let orientation = ["forward", "fakie"];
    obj.orientation = randomizer(orientation);
    let direction = ["ao", "true"];
    let soulPosition = ["reg", "top"];
    let groovePosition = ["frontside", "backside"];
    obj.direction = randomizer(direction);
    let spins = [0, 180, 360, 540];
    obj.spinIn = randomizer(spins);
    obj.spinOut = randomizer(spins);
    obj.outDirection = randomizer(direction);
    obj.soulPosition = randomizer(soulPosition);
    let grooveTricks = [
      "royale",
      "farf",
      "backslide",
      "torque",
      "cabdriver",
      "unity",
      "frontside",
      "backside",
      "fastslide",
    ];
    let soulTricks = ["soul", "acid", "miz", "porn", "x", "mistrial", "makio"];
    if (Math.random() > 0.5) {
      obj.trick = randomizer(soulTricks);
      obj.soulGroove = "soul";
    } else {
      obj.trick = randomizer(grooveTricks);
      obj.soulGroove = "groove";
    }
    console.log("!!!", obj);
    // clean the obj

    setCurrentTrick(obj);
  };

  const {
    spinIn,
    direction,
    orientation,
    trick,
    spinOut,
    soulGroove,
  } = currentTrick;

  let trickOutput = "";

  // sanitization check
  //
  if (spinIn !== 0 && spinIn !== 180) {
    trickOutput += `${spinIn} `;
  }
  if (
    (orientation === "forward" && direction === "ao") ||
    soulGroove === "soul"
  ) {
    trickOutput += "ao ";
  }
  if (orientation === "forward" && direction === "true") {
    trickOutput += "true ";
  }
  if (spinIn === 0) {
    // dont display direction
  } else {
    if (orientation === "fakie" && direction === "true") {
      trickOutput += "inspin ";
    } else if (orientation === "fakie" && direction === "ao") {
      trickOutput += `${"outspin"} `;
    }
  }

  trickOutput += `${trick} `;

  return (
    <div className="App">
      <h1>skate dice</h1>
      <div
        style={{ border: "3px solid green", height: "30vh" }}
        onClick={handleClick}
      >
        <span>{trickOutput}</span>
      </div>
    </div>
  );
}

export default App;
