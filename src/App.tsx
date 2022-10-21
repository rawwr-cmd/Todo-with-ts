import TodoList from "./components/todo-list";
import NewTodo from "./components/new-todo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  const toDoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={toDoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
