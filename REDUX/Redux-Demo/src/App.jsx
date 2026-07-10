import "./App.css";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* All components inside the Provider component has the access of redux store */}
        <Todo />
      </Provider>
    </>
  );
}

export default App;
