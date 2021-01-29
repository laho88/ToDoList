import TodoList from "./components/TodoList";
import './App.css';

function App() {

const list = ["laundry", "do Dishes", "Wash car", "make Dinner", "finish assignments"];

  return (
    <div className="App">
      <TodoList list={list}/>
    </div>
  );
}

export default App;
