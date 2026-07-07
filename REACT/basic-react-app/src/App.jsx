import "./App.css";
// import ProductTab from "./ProductTab";
// import MsgBoxActivity from "./MsgBoxActivity";
// import Button from "./Button";
// import Form from "./Form";
// import CardTab from "./AmazonCard/CardTab";
// import Counter from "./Counter";
// import LikeButton from "./LikeButton";
// import Ludo from "./Ludo";
// import Todo from "./Todo";
// import { digitSum } from "./Activity/helper";
// import Lottery from "./Activity/Lottery";
// import Form from "./Forms/Form";
// import CommentForm from "./CommentActivity/CommentForm";
// import Comments from "./CommentActivity/Comments";
// import Counter2 from "./Counter2";
import Joke from './Joke';

//uncomment this function when rendering lottery component
// let winCondition = (ticket) => {
//   //condition to win the lottery game
//   // return digitSum(ticket)===15;//sum is 15
//   //return ticket[0]=5;//when ticket first element is 5
//   return ticket.every((num) => num === ticket[0]); //every element is same
// };

function App() {
  return (
    <>
      {/* <CardTab/> */}
      {/* <Button></Button>
       */}
      {/* <Form></Form> */}
      {/* <Counter></Counter>
     <LikeButton></LikeButton> */}

      {/* <Ludo></Ludo> */}
      {/* <Todo></Todo> */}

      {/* <Lottery n={4} winningSum={18} />  */}
      {/* As using winningSum can restrict the game to only decide the winner on the basis of sum of digits , but to make it flexible ,use function as prop which will help to decide the wining condition flexibly without no big modifications */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}

      {/* <Comments/> */}
      {/* <Counter2></Counter2> */}
<Joke></Joke>
    </>
  );
}

export default App;
