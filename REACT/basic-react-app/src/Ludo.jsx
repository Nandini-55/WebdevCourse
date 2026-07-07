import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({ red: 0, yellow: 0, green: 0, blue: 0 });
  let [arr, setArr] = useState(["no moves"]);

  let updateRedMove = () => {
    console.log(`moves.red = ${moves.red}`);
    setMoves((preVMoves) => {
      return { ...preVMoves, red: preVMoves.red + 1 };
    }); //...moves  -> spread moves object and also passed new value of its key red

    // arr.push("red move");
    // setArr(arr);//this will not re-render the component even if the arr has new element added - as the address of arr is still same and still pointing to same address

    setArr((preArr) => {
      return [...preArr, " red move"];
    });
  };
  let updateYellowMove = () => {
    console.log(`moves.yellow = ${moves.yellow}`);
    setMoves((preVMoves) => {
      return { ...preVMoves, yellow: preVMoves.yellow + 1 };
    }); //...moves  -> spread moves object and also passed new value of its key

    setArr((preArr) => {
      return [...preArr, " yellow move"];
    });
  };
  let updateGreenMove = () => {
    console.log(`moves.green = ${moves.green}`);
    setMoves((preVMoves) => {
      return { ...preVMoves, green: preVMoves.green + 1 };
    }); //...moves  -> spread moves object and also passed new value of its key
    setArr((preArr) => {
      return [...preArr, " green move"];
    });
  };
  let updateBlueMove = () => {
    console.log(`moves.blue = ${moves.blue}`);
    setMoves((preVMoves) => {
      return { ...preVMoves, blue: preVMoves.blue + 1 };
    }); //...moves  -> spread moves object and also passed new value of its key red
    setArr((preArr) => {
      return [...preArr, " blue moves"];
    });
  };
  return (
    <div>
      <p>Game begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRedMove}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={updateYellowMove}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreenMove}>
          +1
        </button>
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlueMove}>
          +1
        </button>
      </div>
    </div>
  );
}
