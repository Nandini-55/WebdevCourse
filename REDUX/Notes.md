## **Redux**

- Redux is a State Management Library for JS Apps.
- It is not associated with react only , it can be used with react , angular js or vanilla javascript.
- It is bulid for larger and more complex apps.
- Redux Toolkit is the official recommendation of writing Redux code

---

**IMP TERMS**

- **Store:** Centralized store holds the whole state tree of your application. Store all state variables , which can be commonly accessed.

- **Reducer:** Function that takes current state and an action as arguments ,and return a new state result. i.e.- (state,action)=>newState.
-  **Reducers:**Object of Multiple Reducer .
- **Action:** It is a plain JavaScript object that has a type field. (like events).
  e.g.-
  {
  type:"CREATE_USER",
  payload:"write code",
  } - type told the action's work which help to maintain the record of task, payload is the extra info that can be passed with an action(e.g.-todo task to add as string )
- **Slice:** Collection of Redux reducer Logic and Actions for a single feature together in a single file. e.g.- a file which consist of all reducers and actions used in navbar.
- **Provider Component:** The \<Provider> component makes the Redux store available to any nested components that
need to access the Redux store.

- **Dispatching Action:** Triggering a State Change,The **useDispatch** hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

- **useSelector:** The useSelector hooks allow you to extract data or the state from the Redux store using selector function. (returns the data)

---

## Installation

- `npm create vite@latest`
- `npm install @reduxjs/toolkit`
- `npm install react-redux`
- refer - https://redux-toolkit.js.org/introduction/getting-started

## Thought process

- First , config store(do basic setup of store) , Design the store.
- Second , think and create all possible actions.
- Third , create reducer based on those actions.
- Fourth , add Slice reducers into store.

## Steps to Use :

- Create a file named src/app/store.js
- Import the configureStore API from Redux Toolkit.
- Add a new file named src/features/componentName/componentSlice.js
  (As the reducers and actions are created on the basis of Slice , in other words ,all reducers and actions of navbar are stored separately and all reducers and actions of footer are stored separately.Therefore , the stucture will be - src/features/navbar/navbarSlice.js and src/features/footer/footerSlice.js )

- refer - https://redux-toolkit.js.org/tutorials/quick-start
