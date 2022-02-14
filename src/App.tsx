import React, { useState } from "react";
import { TodoListItem } from "./components/TodoLIstItem";

const initialTodos: Todo[] = [
  {
    text: "Make a todo app",
    complete: false,
  },
  {
    text: "Add SCode new feature",
    complete: false,
  },
  {
    text: "Eat lunch",
    complete: true,
  },
];

function App() {
  const [todos, setTodos]= useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if {todo === selectedTodo} {
        return {
          ...todo,
          complete: !todos.complete,
        };
      }
      return todos;
    });
    setTodos(newTodos);
  };

    return (
    <>
    <ul>

  <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
  <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
  <TodoListItem todo={todos[2]} toggleTodo={toggleTodo}/>

    </ul>
    </>
  );
}

export default App;
