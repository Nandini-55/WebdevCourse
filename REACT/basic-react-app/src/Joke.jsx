import { useEffect } from "react";
import { useState } from "react";

export default function Joke() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/jokes/random";
  let getJoke = async () => {
    let reponse = await fetch(URL);
    let jsonResponse = await reponse.json();
    // console.log(jsonResponse);
    setJoke(() => {
      return { ...jsonResponse, show: false };
    });
  };

  let showAns = () => {
    setJoke((curr) => {
      return { ...curr, show: true };
    });
  };

  // let [joke, setJoke] = useState(getJoke);- one way to call the function on render

  //another way - using useEffect
  useEffect(() => {
    async function getFirstJoke() {
        let reponse = await fetch(URL);
    let jsonResponse = await reponse.json();
    setJoke(() => {
      return { ...jsonResponse, show: false };
    });
    }
    getFirstJoke();//This is the correct way to use a async function in useEffect - the function should be defined and then called inside the arroy function defined in useEffect
  },[]);

  return (
    <>
      <h2>Joker!🤡</h2>
      <br />
      <p>{joke.setup}</p>
      <br />
      {joke.show ? (
        <p>{joke.punchline}</p>
      ) : (
        <button onClick={showAns}>Show Result</button>
      )}
      <br />
      <button onClick={getJoke}>New Joke </button>
    </>
  );
}
