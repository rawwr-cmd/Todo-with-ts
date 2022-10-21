import { useRef } from "react";
import "./new-todo.css";

//interface or type
//type NewTodoProps = {}
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  // console.log(textInputRef);

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // console.log(enteredText);
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
