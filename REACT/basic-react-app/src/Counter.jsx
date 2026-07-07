//BEFORE USING useState() hook:-

// export default function Counter() {
//   let count = 0;

//   function incCount() {
//     count += 1;
//     console.log(count);
//   }

//   return (
//     <div>
//       <h3>Count = {count}</h3>
//       {/* Even after you click on the following button the value of Count in UI will not change but on console it will. Because an element is rendered only once and doesn't re-render even if any changes occurs  */}
//       <button onClick={incCount}>Increase Count</button>
//     </div>
//   );
// }

//AFTER USING useState() hook:-

import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //passes the initialState and extracted the initial state as count and the set function as setCount - it must be inside the component else it will throw error

  console.log("Component re-rendered");

  //   function incCount() {
  //     setCount(count + 1); //this function will helps to update the value and re-render the component
  //     console.log(count);
  //     // CONSOLE VALUE WILL BE BEFORE THE VALUE OF COUNT UPDATED - due to closures(refer to javascript folder) - as setCount just passes the new value to re-render state to initialise
  //   }

  //   function incCount() {
  //     setCount(count + 1); //THIS WILL UPDATE THE VALUE FROM 0 TO 1
  //     setCount(count + 1);//THIS WILL NOT UPDATE THE VALUE FROM 0 TO 2 , AS WHEN THIS FUNCTION IS CALLED THE PREVIOUS VALUE IS 0 NOT 1 AS IT IS CALLED TOGETHER WITH THE PREVIOUS ONE, THEREFORE USE CALLBACKS TO PERFORE PREDICTABLE FUNCTION. e.g.-next incCount function below
  //     console.log(count);
  //   }

  //USING CALLBACK FUNCTION
  // function incCount() {
  //   setCount((currValue) => {
  //     return currValue + 1;
  //   }); //THIS WILL UPDATE THE VALUE FROM 0 TO 1
  //   setCount((currValue) => {
  //     return currValue + 1;
  //   }); //THIS WILL UPDATE THE VALUE FROM 1 TO 2 , as the callback are stored in order and then executed one by one
  //   console.log(count);
  // }

  // function incCount() {
  //   setCount(25);// ONLY RE-RENDER COMPONENT WHEN THEIR IS ANY CHANGE IN VARIABLE - it will re-render from 0 to 25 but then it will not
  // }

  function init() {
    console.log("Function is executed");
    return Math.random;
  }
  function incCount() {
    // setCount(init());//wrong
    setCount(init); // can use function to initialise but don't call it else it will be executed each time the component is rendered which will not change the output but still takes more resources to execute that function . just pass the functon as variable
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      {/* now the value in UI will update as component will be re-rendered */}
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
