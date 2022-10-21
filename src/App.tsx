import { useState } from "react";
import { ToDo } from "./todo.model";
import TodoList from "./components/todo-list";
import NewTodo from "./components/new-todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  // console.log(todos);
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={toDoAddHandler} />
      <TodoList items={todos} onDeleteToDo={deleteTodoHandler} />
    </div>
  );
};

export default App;

// const words = ["hi", "there"];
// words.filter((word) => word !== "word");
