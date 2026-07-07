import { useState } from "react";
import "./Lottery.css";
// import { generateTicket, digitSum } from "./helper";
import { generateTicket } from "./helper";
import Ticket from "./Ticket";
import ButtonNew from "./ButtonNew";

// Appropriate way (using decomposition)
// export default function Lottery({ n = 3, winningSum = 15 }) {//to make winning condition more flexible use function as prop to obtain the new condtion
export default function Lottery({ n = 3, winCondition }) {
  //default values
  //Lottery is a Logical Component
  let [ticket, setTicket] = useState(generateTicket(n));
  // let isWinning = digitSum(ticket) === winningSum;//fixed way to win
  let isWinning = winCondition(ticket); //flexible way to define winning condition
  let getTicket = () => {
    setTicket(generateTicket(n));
  };
  return (
    <div className="box">
      <h1>Lottery</h1>
      {isWinning && <h4>'Congratulations, you won! 🏆'</h4>}

      <br />
      <Ticket ticket={ticket} />
      <ButtonNew action={getTicket} />
    </div>
  );
}

//          ANOTHER WAY (simple but not a good way to write code - without decomposition) :-
// export default function Lottery() {
//     let [ticket,setTicket]=useState(generateTicket(3));
//      let isWinning = digitSum(ticket) === 15;
//      let getTicket = () => {
//         setTicket(generateTicket(3));
//      }
//     return (
//     <>
//       <h1>Lottery{isWinning && <span>  'Congratulations, you won!'</span>}</h1>
//       <br />
//       {}
//       <p>Lottery Ticket = {ticket.map(val=><span>{val}</span>)}</p>
//       <button onClick={getTicket}>Get New Ticket</button>
//     </>
//   );
// }

//          ANOTHER WAY (simple but not a good way to write code - without decomposition) :-
// export default function Lottery() {
//   let [ticket, setTicket] = useState("000");
//   let [won, setWon] = useState(false);
//   let getTicket = () => {
//     let newTicket = Math.floor(Math.random() * 1000)
//       .toString()
//       .padStart(3, "0");
//     setTicket(() => {
//       console.log(newTicket);
//       return newTicket;
//     });
//     let digitSum = 0;
//     for (let char of newTicket) {
//       digitSum += Number(char); // Convert each character back to a number
//     }
//     if (digitSum == 15) {
//       setWon(() => {
//         return true;
//       });
//     } else {
//       setWon(() => {
//         return false;
//       });
//     }
//   };
//   return (
//     <>
//       <h1>Lottery{won && <span>  'Congratulations, you won!'</span>}</h1>
//       <br />
//       {}
//       <p>Lottery Ticket = {ticket}</p>
//       <button onClick={getTicket}>Get New Ticket</button>
//     </>
//   );
// }
