import TodoList from "./components/todo-list";
import NewTodo from "./components/new-todo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
