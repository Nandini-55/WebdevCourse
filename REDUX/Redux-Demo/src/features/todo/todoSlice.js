import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid - similar to uuid - generate id
const initialState = {
  //store's initia state
  todos: [{ id: "abc", task: "demo task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //contains multiple reducer function
    addTodo: (state, action) => {
      //action wil bring task in payload
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation - possible in redux(doesn't require spreads ) ->Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax.
    },
    deleteTodo: (state, action) => {
      //action will bring id in payload
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    markAsDone: (state, action) => {
      //action will bring id in payload
      let todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = true;
      }
    },
  },
});

// Redux Toolkit automatically generates action creators (fnxs that create action objects) for each reducer
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
