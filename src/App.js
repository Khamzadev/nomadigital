import { useState } from 'react'
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import './App.css';


function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'ddddd', status: true },
    { id: 2, title: 'ddddd', status: false },
    { id: 3, title: 'ddddd', status: true },
    { id: 4, title: 'ddddd', status: false },
    { id: 5, title: 'ddddd', status: true },
  ])

  return (
    <div className="App">
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
