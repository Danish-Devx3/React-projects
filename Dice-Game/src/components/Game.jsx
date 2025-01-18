import React, { useState } from "react";
import Score from "./Score";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";
import StartGame from "./StartGame";

const Game = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(2);
  const [error, setError] = useState("");

  const generateRandonNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandonNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNumber(undefined);
  }

  const handleReset = () =>{
    setScore(0);
    setselectedNumber(undefined);
  }

  return (
    <div className="">
      <div className="flex justify-between max-w-[1180px] pt-[70px] mx-auto items-end">
        <Score score={score} />
        <SelectNumber
          error={error}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <Dice currentDice={currentDice} roleDice={roleDice} />
      <div className="text-center mt-5">
        <button onClick={handleReset}
          type="button"
          className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br px-8 py-2 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
