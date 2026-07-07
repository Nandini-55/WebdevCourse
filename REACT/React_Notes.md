# React Notes

## Index
- [Introduction to React](#introduction-to-react)
- [Tools Used to Setup React](#tools-used-to-setup-react)
  - [Steps](#steps)
- [Project Structure](#project-structure)
  - [Points to Remember](#points-to-remember)
  - [Webpack gives the functionality of import-export](#webpack-gives-the-functionality-of-import-export)
- [JSX Rules](#jsx-rules)
  - [The rules of JSX](#the-rules-of-jsx)
- [Props](#props)
  - [Pass Array or Object in Props](#pass-array-or-object-in-props)
  - [Functions as Props](#functions-as-props)
  - [Rendering Array](#rendering-array)
  - [Conditionals](#conditionals)
  - [Dynamic Styling](#dynamic-styling)
  - [React Developer Tools](#react-developer-tools)
  - [Events](#events)
- [Hooks](#hooks)
  - [States](#states)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [Objects, Array & States](#objects-array--states)
  - [Design Patterns](#design-patterns)
- [Types of Components](#types-of-components)
- [Forms in React](#forms-in-react)
  - [Form Validation in React](#form-validation-in-react)
- [Material UI](#material-ui)
- [Reference](#reference)

---

## Introduction to React

**React** - is a JS Library for creating UI (User Interface) - created and maintained by Facebook.

It builds user interface out of individual pieces called components - reusable.

Components are in hierarchical form.

**Component** is a piece of UI that has its own logic and appearance. It can be as small as a button and as large as an entire page.

Create using **JSX** (JavaScript Extension Syntax) - way of writing/embedding HTML in JS code - converted (transpiled) into JavaScript using `Babel`: https://babeljs.io/ - try it out, you can see the conversion.

---

## Tools Used to Setup React

1. **Create React App**
   - Old and slow

2. **Vite**
   - Faster
   - https://vitejs.dev
   - **Comparison:** https://semaphore.io/blog/vite

### Steps

```bash
npm create vite@latest
```

Select:
- Project Name
- Framework → React
- Variant → JavaScript
- Linter → ESLint  

If `node_modules` are not installed:

```bash
cd project-name
```

```bash
npm install
```

Start the server:

```bash
npm run dev
```

---

## Project Structure

Folder created - Project name you entered:

- `node_modules` - dependencies
- `public` - Static assets served directly to the browser
- `src` - Primary application source code
  - `assets/` - Media files (images, global fonts, svgs)
  - `App.jsx` and `App.css` - creates single app
  - `index.html` - main file - treats `main.jsx` as script → `main.jsx` renders `App` component from `App.jsx` in root div.

### Points to Remember

Ways to use a component, e.g.:

```jsx
<Title></Title> or <Title/>
```

### Webpack gives the functionality of import-export

Ways:

1. **Default export**: `export default Title;` - used for single value, can be imported using a different (custom) name.
2. **Named export**: `export {Title, Description};` - imported with specific name: `import {Title} from "./src/Small.jsx"`

---

## JSX Rules

### The rules of JSX:

**1. Return a single root element:** To return multiple elements from a component, wrap them with a single parent tag. Ways:
- Using `<div>` - wrap all components in one div
- **React Fragment**: Fragments let you group a list of children without adding extra nodes to the DOM, using `<> </>` instead of an extra tag.

**2.** Close all the tags

**3.** camelCase most of the things (component name should start with capital case)

**4.** JavaScript reserved words can't be used as attributes, e.g. - `<div class="box">` will throw an error, `<div className="box">` is right.

To write JS code in JSX use `{}`, and all the content between the curly braces will be treated as pure JavaScript.

E.g.:
```jsx
let name = "nandini"
return (
  <div>
    <p>2*2= {2 * 2}</p>    {/* output: 2*2=4 */}
    <p>Hi, {name}</p>      {/* output: Hi, nandini */}
  </div>
);
```

Structuring components - from small to large, e.g.:

`title + description + icon = Card` → `Card + Card = ProductTab` → `ProductTab + Ad = ProductService`

**Styling** - CSS file is created with respect to the component, e.g. - `Card.jsx` → `Card.css`. There will be no error if not followed.

---

## Props

**React props**: Props are the information that is passed to a JSX tag, similarly as arguments passed in a function. Given while rendering the component as attributes.

E.g. - creating props:
```jsx
function Product({title, price}) { // using destructuring
  return (
    <div className="Product">
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      <h5>Price:{price}</h5>
    </div>
  );
}
```

Passing props:
```jsx
function ProductTab() {
  return (
    <>
      <Product title="Phone" price={30000} />
      <Product title="Laptop" price={40000} />
      <Product title="Pen" price={10} />
    </>
  );
}
```

- Numbers are passed in `{}`, else it will show an error as JSX only takes input as expression or text.

### Pass Array or Object in Props

Simply use `[]` to pass array and `{}` to pass object in `{}` and add values in it.

E.g:
```jsx
<Product title="Phone" price={30000} features={["Hi-tech", "durable", "fast"]} />
```
Output: `Hi-techdurablefast` - in JSX each item in array prints one by one.

### Rendering Array

To avoid printing array elements like this `"Hi-techdurablefast"`, use the following ways:

1. Pass element as list tag, e.g.:
   ```jsx
   features={[<li>Hi-tech</li>, <li>durable</li>, <li>fast</li>]}
   ```
2. Using map function to convert each element into a tag, e.g.:
   ```jsx
   features.map((feature) => <li>{feature}</li>);
   ```

### Conditionals

Simple way to use if-else:

```jsx
{price > 30000 ? <p>Discount 5%</p> : null}
```
This will create a paragraph tag only when price is greater than 30000 and will display the value.

OR

```jsx
{price > 30000 && <p>Discount 5%</p>}
```
If price > 30000 then discount will print, as both conditions are required to be true.

### Dynamic Styling

Styling applies on a specific condition, e.g.:

```jsx
let styles = { backgroundColor: price > 30000 ? "yerlow" : "" };

function Product({title, price}) { // using destructuring
  return (
    <div className="Product" style={styles}>
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      <h5>Price:{price}</h5>
    </div>
  );
}
```

### React Developer Tools

Install React Developer Tools for Chrome from - https://react.dev/learn/react-developer-tools - it will add two more tabs in inspect - **Component** (helps to see components created in react based websites) and **Profile**.

### Events

- **Click Event in React** - event triggers by clicking events, e.g. - right click or left click → `Button.jsx`
- **Non-Click Events** - event triggers by non-clicking events, e.g. - mouse hover, mouse cursor remove, any key on keyboard etc. → `Button.jsx`
- **Event object** - `Form.jsx`

---

## Hooks

### States

The **state** is a built-in React object that is used to contain data or information about the component.

A component's state can change over time; whenever it changes, the component re-renders.

### Hooks

Earlier, React was used to create a class-based component, not a functional component. Therefore, it has attached properties and methods which help to perform multiple tasks easily, but after creating function-based components, hooks are used to use these functions and methods in functional components too.

Hooks are special JavaScript functions that allow functional components to manage local state, handle side effects, and access core React features without writing class components.

### useState

`useState` is a React Hook that lets you add a state variable (changes the state of a component) to your component.

Syntax:
```js
const [state, setState] = useState(initialState);
```

`useState` returns an array with exactly two values:
1. The current state. During the first render, it will match the `initialState` you have passed.
2. The set function that lets you update the state to a different value and trigger a re-render.

E.g. - `Counter.jsx`

### useEffect

`useEffect` is a React Hook that lets you perform side effects in function components or synchronize a component with an external system. Refer - react.dev/reference/react/useEffect

Performs task based on rendering (e.g. - first time render, re-render, re-render based on specific component, every time etc.)

Syntax:
```js
useEffect(setup, dependencies?)
```
- `setup` - is the function executed
- `dependencies` - are state variables, which when rendered the function is executed

E.g. - `REACT\basic-react-app\src\Counter2.jsx`

Used for - Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Also used for asynchronous operations too.

E.g. - `REACT\basic-react-app\src\Joke.jsx`

### Objects, Array & States

When only one key or value or a value on a specific index is changed in the object or array which is used in a state, the state will not be changed and will not re-render the component. Therefore, a new object or array is passed with the modified value (use spreads to change the state by adding new element and passing the new array or object; to delete element use filter function).

E.g. - `Ludo.jsx`

Refer to - react.dev/learn/updating-arrays-in-state

### Design Patterns

How you should arrange your design:

- Try to make it less specific and use more variables
- Divide components into hierarchical components
- To change state of any component, props can be passed down to hierarchy (e.g. - app can pass title to video component) but can't pass them upward - that's why design pattern is important

React has a special "**State Design Pattern**" which helps to re-render the component by changing the state, through the parent component, and that parent component requires that state too (shared state). Refer - react.dev/learn/sharing-state-between-components

Refer to `REACT\basic-react-app\src\Activity\Lottery.jsx` - to see how the Lottery component sent ticket no. to Ticket component and which later sends it to TicketNum component in form of props.

Simply, you have to pass the new state using props to their common parent. Later, it will help to change the state of the final component and also use that same state to do the parent's task. This is known as **lifting state up**.

### Types of Components

**1. Classification by Syntax:**
- **Functional components**: are JavaScript functions that accept props and return JSX to describe the UI. Because they are simpler and use the React Hooks API, they are the standard for modern development.
- **Class components**: are ES6 classes that extend `React.Component` and implement a render method. They were the traditional way to manage local state and lifecycle events.

**2. Classification by Architectural Pattern Design:**
- **Presentational Components ("Dumb")**: used for UI layout, design, styling, and basic structure. Rarely hold state. Only manage local UI state (e.g., drawer toggles). Can have props. More reusable.
- **Logical / Container Components ("Smart")**: used for data fetching, state manipulation, and business logic. Highly stateful. Track app data, forms, and network state. Less reusable.

E.g. - `REACT\basic-react-app\src\Activity\Lottery.jsx` - Logical Component
`REACT\basic-react-app\src\Activity\Ticket.jsx` - Presentational Component

### Functions as Props

As in JavaScript, functions are 1st Class objects, which means they can be passed to a function as argument, returned from it, and assigned to a variable.

Refer - `REACT\basic-react-app\src\Activity\ButtonNew.jsx`

### Forms in React

In React, the form elements like text area and input field, etc., have their own state, which is maintained as a variable in React using the `useState` function. This helps to control the overall working of that input element and to read the current value from the input element entered by the user.

In usual forms without React, we get the information from the form when the user submits the form. In React, as the input element of the form has its own state, it is stored and updated as the user updates it.

Hence, those input elements which are controlled by React are called **Controlled Component**. Moreover, the state of those input elements, which is stored in React (React State), is the single source of truth.

You can refer to: `REACT\basic-react-app\src\Forms\Form.jsx`

Way to send data upward using function, e.g. - `REACT\basic-react-app\src\CommentActivity\Comments.jsx`

### Form Validation in React

Using **Formik** library.

Link - formik.org/docs/tutorial#validation

To perform validation from scratch it requires multiple functions and state variables - using condition to check if it is valid in a function and if not, then update the respective state variable and render a `<p>` tag which shows the error message.

### Material UI

It is a Library of React UI Components.
It includes a comprehensive collection of prebuilt components that are ready for use in production right out
of the box.

Material UI uses Emotion as its default styling engine.
Link - https://mui.com/material-ui/getting-started/

**Installation**:
- First create a react app - 
```npm create vite```
- Install material ui
```npm install @mui/material @emotion/react @emotion/styled```
- Install Roboto font - Material UI uses the Roboto font by default.
```npm install @fontsource/roboto```
To use it just - import '@fontsource/roboto/300.css'; - in any file and use . You can use different weights - 300, 400, 500,700 while import .
-  To use the font Icon component or the prebuilt SVG Material Icons:
```npm install @mui/icons-material```
- Now , just import components and use them as react components.
- To use component from Materail UI - 'expand code' given for the component in docs and copy the import statement.
e.g.- REACT\MaterialUI\mini-project-react\src\Form.jsx
---

## Reference

react.dev/learn