import "./todo-list.css";
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteToDo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteToDo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteToDo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
