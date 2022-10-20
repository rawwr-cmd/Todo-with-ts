import { useRef } from "react";
const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  console.log(textInputRef);

  const sumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    console.log(enteredText);
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
