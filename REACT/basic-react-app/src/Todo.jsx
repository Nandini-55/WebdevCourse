import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [tasks, setTasks] = useState([]); //add it in array
  let [newTask, setNewTask] = useState(""); //takes input from input tag

  let addTodo = () => {
    // add new task using the "newTask" variable
    console.log(newTask);
    if (newTask !== "") {
      setTasks((prevTodo) => {
        return [...prevTodo, { task: newTask, id: uuidv4(), isDone: false }];
      });
      setNewTask(""); //reset new tasks
    }
  };

  let updateTodo = (event) => {
    //extract input box value and update the variable
    setNewTask(event.target.value);
  };

  let deleteTodo = (id) => {
    // delete task uing its id
    setTasks((prevTasks) => {
      return prevTasks.filter((todo) => todo.id != id);
    });
  };

  let markAllDone = () => {
    //update all elements in array
    setTasks((prevTodos) => {
      return prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      });
    });
  };

  let markDone = (id) => {
    // mark one task done using its id
    setTasks((prevTasks) => {
      return prevTasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <>
      <div>
        <input type="text" value={newTask} onChange={updateTodo} />
        <button type="button" onClick={addTodo}>
          Add Task
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((todo) => (
            <li key={todo.id}>
              <span
                style={todo.isDone ? { textDecoration: "line-through" } : {}}
              >
                {todo.task}
              </span>
              &nbsp; &nbsp;
              {/* <button onClick={deleteTodo(todo.id)--"here it will execute the function and will not work later .. therefore use arrow function  as follows"}>Delete</button>  */}
              <button
                style={{ all: "unset", cursor: "pointer" }}
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
              &nbsp;
              <button
                style={{ all: "unset", cursor: "pointer" }}
                onClick={() => {
                  markDone(todo.id);
                }}
              >
                {todo.isDone ? (
                  <i class="fa-regular fa-circle-check"></i>
                ) : (
                  <i class="fa-regular fa-circle"></i>
                )}
              </button>
            </li>
          ))}
        </ul>
        <br />
        {tasks.length > 0 ? (
          <button onClick={markAllDone}>Mark All Done</button>
        ) : undefined}
      </div>
    </>
  );
}
