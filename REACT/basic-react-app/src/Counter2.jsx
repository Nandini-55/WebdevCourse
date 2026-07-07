import { useEffect } from "react";
import { useState } from "react";

export default function Counter2() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let incX = () => {
    setCountx((currx) => currx + 1);
  };
  let incY = () => {
    setCounty((curry) => curry + 1);
  };

  useEffect(function printSomthing() {//this will be executed each time the component is rendered or re-rendered no matter what is updated 
    console.log("This is a side effect.");
  });

    useEffect(function printX() {//this will be executed each time the component is rendered or re-rendered due to change in 'countx' state variable
    console.log("This is a side effect of increasing X.");
  },[countx]);
useEffect(function printX() {//this will be executed each time the component is rendered or re-rendered due to change in 'countx'or'county' state variable
    console.log("This is a side effect of increasing X.");
  },[countx,county]);

  useEffect(function printX() {//this will be executed each time the component is rendered first time
    console.log("This is a side effect of increasing X.");
  },[]);//[]

  return (
    <>
      <p>Count x = {countx}</p>
      <button onClick={incX}>Increase X</button>
      <p>Count y = {county}</p>
      <button onClick={incY}>Increase Y</button>
    </>
  );
}
