//React - is a JS Library for creating UI(User Interface) - created and maintained by facebook
// It builds user interface out of individual pieces called components. - resualbe
//components are in hierarchical form .
//Component is a piece of UI that has its own logic and appearance .
//It can be small as a button and large as a entire page.
//Create using JSX(JavaScript Extension Syntax) - way of writing/embedding html in js code - converted(transpile) into javascript using 'Babel' : https://babeljs.io/- try it out - you can see the conversion

//Tools used to set up react:
//1. Create-React-App :- old and slow
//2. Vite :- faster ; vitejs.dev
//COMPARISION:https://semaphore.io/blog/vite

//STEPS:
//npm create vite@latest => project name , select framework(React) , variant(Js)
//If node_modules not installed in the created folder , then -> cd project-name -> npm install
//Start the server - npm run dev

//folder created - Project name you entered
//o node_modules - dependencies
//o public - Static assets served directly to the browser
//o src - Primary application source code
//  ├── assets/             # Media files (images, global fonts, svgs)
//  ├──App.jsx and App.css - creates single app
//  ├──index.html - main file  - treats main.jsx as script -> main.jsx render App component from App.jsx in root div.

//points to remember:

//ways to use component - e.g.- 1.) <Title></Title> 2.) <Title/>

//WebPack give the functionality of import-export -> import - export ways :
// 1.) default export : ' export default Title '; - used for single value
//can be imported using different(custom) name
//2.) named export : ' export {Title , Description } ';
//imported with specific name : ' import {Title} from "./src/Small.jsx" '

//The rules of JSX:
//1. Return a single root element: To return multiple elements from a component, wrap them with a single parent tag.Ways:
//o Using <div> - wrap all components in one div
//o  React Fragment: Fragments let you group a list of children without adding extra nodes to the DOM , using <> </> instead of an extra tag.
//2. Close all the tags
//3. camelCase most of the things (component name should be start with capital case )
//4. JavaScript reserved words can't be used as attributes . e.g. - <div  class="box">- will throw error , <div className="box"> - is right

//To write js code in jsx use {}  , and all the content between the urly braces will be treated as pure javascript .
//  e.g.-let name ="nandini"
// return (
// <div>
// <p>2*2= {2 *2}</p> - output: 2*2=4
// <p>Hi, {name}</p> - output: Hi, nandini
// </div> );

//structuring components - from small to large . e.g - title + description + icon = Card  -> Card + Card => ProductTab ->ProductTab + Ad -> ProductService

//Styling - css file is created with respect to the component . e.g. - Card.jsx -> Card.css
//Their will be no error if not followed

//React props : Props are the information that is passed to a JSX tag, similarly as arguments passed in a function.Given while rendering the component as attributes.
//e.g.-
//creating props
//function Product({title ,price}){//using destructuring
//     return(
//         <div className="Product">
//             {/* <h3>{props.title}</h3> */}
//              <h3>{title}</h3>
//             <h5>Price:{price}</h5>
//         </div>
//     );
// }
//passing props:-
// function ProductTab() {
//   return (
//     <>
//       <Product title="Phone" price={30000} />
//       <Product title="Laptop"price={40000} />
//       <Product title="Pen" price={10} />
//     </>
//   );
// }
//o numbers are passed in {} , else it will show error as JSX only takes input as expression or text

//Pass Array or object in props: simply use [] to pass array and {} to pass object  in {} and add values in it.
//e.g- <Product title="Phone" price={30000} features={["Hi-tech","durable","fast"]}/> - output= Hi-techdurablefast  - in jsx each item in array prints one by one

//Rendering array - to avoid printing array element like this "Hi-techdurablefast" , use following ways:
//1.) pass element as list tag : e.g.- features={[<li>Hi-tech</li>, <li>durable</li>, <li>fast</li>]}
// 2.) Using map function to convert each element into a tag : e.g.- features.map((feature)=><li>{feature}</li>);

//Conditionals - simple way to use if-else :
// e.g.-  {price > 30000 ? <p>Discount 5%</p> : null} - this will create a paragraph tag only when price is greater than 30000 and will display the value
//                                          OR
//      {price > 30000 &&  <p>Discount 5%</p> }  - if price>30000 then discout will print as both conditions are required to be true

//Dynamic styling - styling applies on a specific condition:
// e.g.- let styles = { backgroundColor: price > 30000 ? "yerlow' : "" };
//function Product({title ,price}){//using destructuring
//     return(
//         <div className="Product" style={styles}>
//             {/* <h3>{props.title}</h3> */}
//              <h3>{title}</h3>
//             <h5>Price:{price}</h5>
//         </div>
//     );
// }

// Install React Developer Tools for chrome from - https://react.dev/learn/react-developer-tools - it will add two more tabs in inspect - component(helps to see components created in react based websites) and Profile

//Click Event in React - event triggers by clicking events -e.g.-right click or left click -> Button.jsx

//Non-Click Events - event triggers by non-clicking events -e.g.-mouse hover , mousecursor remove , any key on keyboard etc. -> Button.jsx

//Event object  -  Form.jsx

//States -The state is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-renders.

//Hooks - Earlier, react was to create a class-based component, not a functional component. Therefore, it has attached properties and methods which help to perform multiple tasks easily, but after creating function-based components, hooks are used to use these functions and methods in functional components too.
// Hooks are special JavaScript functions that allow functional components to manage local state, handle side effects, and access core React features without writing class components.

//useState is a React Hook that lets you add a state variable(changes the state of an component) to your component.
// syntaxt - const [state, setState] = useState(initialState);
// useState returns an array with exactly two values:
// 1. The current state. During the first render, it will match the initialState you have passed.
// 2. The set function that lets you update the state to a different value and trigger a re-render.
//e.g.-Counter.jsx

//useEffect is a React Hook that lets you perform side effects in function components or synchronize a component with an external system.  #refer - react.dev/reference/react/useEffect
//Performs task based on rendering (e.g- first time render , re-render , re-render based on specific component , eveytime etc.)
//Syntax => useEffect(setup, dependencies?)
//setup - is function executed 
//dependencies - are state variables, which when rendered the function is executed 
//e.g.- REACT\basic-react-app\src\Counter2.jsx
//used for - Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
//Also used for asynchronous operations too 
//e.g.- REACT\basic-react-app\src\Joke.jsx

//Objects,Array & States - when only one key or value or a value on specific index is changed in the object or array  which is used in a state , state will not be changed and will not re-render the component . therefore , a new object or array  is passed with the modified value.(use spreads to change the state by adding new element and passing the new array or object; to delete element use filter function ) E.g. - Ludo.jsx 
//refer to - react.dev/learn/updating-arrays-in-state

//  Design Patterns :- how you should arrange your desing.
//Try to make it less specific and use more variables
//Divide components into heirarchical components
//To change state of any component , props can be passed down to hierarchy(e.g.-app can title to video component) but can't pass them upward - that's why design pattern is important
//React has a special "State Design Pattern" which helps to re-render the component by changing the state , thorugh the parent component and that parent component requires that state too(shared state). -- refer - react.dev/learn/sharing-state-between-components
//refer to "REACT\basic-react-app\src\Activity\Lottery.jsx"-to see how the Lottery component sent ticket no. to Ticket component and which later send it to TicketNum component in form of props
//Simply, you have to pass the new state using props to their common parent . Later, it will help to change the state of the final component and also use that same state to do the parent's task. --This is known as lifting state up. 

//Types of components :- 
//1.Classification by Syntax : 
//  o Functional components : are JavaScript functions that accept props and return JSX to describe the UI. Because they are simpler and use the React Hooks API, they are the standard for modern development.
//  o Class components : are ES6 classes that extend React.Component and implement a render method. They were the traditional way to manage local state and lifecycle events. 

//2.Classification by Architectural Pattern Design:
//  o Presentational Components ("Dumb"): used for UI layout, design, styling, and basic structure.Rarely hold state. Only manage local UI state (e.g., drawer toggles).Can has props. More reusable.
//  o Logical / Container Components ("Smart"): used for Data fetching, state manipulation, and business logic.Highly stateful. Track app data, forms, and network state. Less reusable.

//e.g-REACT\basic-react-app\src\Activity\Lottery.jsx- Logical Component 
//REACT\basic-react-app\src\Activity\Ticket.jsx- Presentational Component 


//Functions as props:As in javascripts functions are 1st Class objects , which means they can be passed to a function as argument, returned from it & assigned to a variable.
// refer - REACT\basic-react-app\src\Activity\ButtonNew.jsx 


//Forms in React: In React, the form elements like text area and input field, etc., have their own state, which is maintained as a variable in React using the `useState` function. This helps to control the overall working of that Input element  and to read the current value from the input element  entered by the user. 
// o In usual forms without React, we get the information from the form when the user submits the form. In React, as input element of the form has its own state, it is stored and updated as the user updates it. 
//Hence, those input element which are controlled by React are called Controlled Component. Moreover, the state of those  input element, which is stored in React(React State ), is the single source of truth. 
// You can refer to : REACT\basic-react-app\src\Forms\Form.jsx

//Way to send data upward using function e.g.-REACT\basic-react-app\src\CommentActivity\Comments.jsx

//Form validation in React : using Formik library 
// link - formik.org/docs/tutorial#validation
//To perform valdation from scratch it require multiple functions and state variables- using condition to check it is valid in a function and if not than upadate the respective state variable and render a p tag which shows the error message


//reference : react.dev/learn
