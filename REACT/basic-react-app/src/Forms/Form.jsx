import "./Form.css";
import { useState } from "react";
export default function Form() {
  let [userInput, setInput] = useState(""); //This is the variable to store the value of user input. Moreover, this variable is only visible on the screen . If it doesn't gets updated even if the user changes the value in the input field. The visible value on the screen will also be the same as the previous even if the user tries to change the input.
  let updateValue = (event) => {
    //This function updates the value in the input field each time the user enters or makes changes in the input field.
    setInput(event.target.value);
  };

  //to handle change in multiple field using one function only
  let [allInputs, setUpdatedInput] = useState({
    fullName: "",
    userName: "",
    password: "",
  }); //use an object to store multiple input values
  let handleChange = (event) => {
    //common handler
    console.log(event.target.name);
    setUpdatedInput((prevInput) => {
      //event.target.name- name of field
      //[event.target.name]- used to access key of object by computed value(variable value)
      //event.target.value - new vaule entered by user
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(allInputs);
    setUpdatedInput({ fullName: "", userName: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full name:</label>
      <input
        type="text"
        placeholder="Enter username"
        onChange={handleChange}
        value={allInputs.fullName}
        name="fullName" //id must be same as object's key , as it is used to access the value from object when update it
      />
      <br />
      <br />
      {/*example of controlled component */}
      {/*Here you can see the onChange event helps to call the updateValue function which update the value of "userInput" variable when the user changes the value in the input field. The value in the input field, which is appeared to the user, is not something new. It is the variable which is stored in React using useState itself. */}

      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        placeholder="Enter username"
        onChange={handleChange}
        value={allInputs.userName}
        name="userName"
      />
      
      <br />
      <br />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={allInputs.password}
        name="password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
