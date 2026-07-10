import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  function handleTask(event) {
    return setTask(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    dispatch(addTodo(task));//pass payload to reducer
    setTask("");
  }
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="text" value={task} onChange={handleTask} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
