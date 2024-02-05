import { useState } from "react";
import MyStyle from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", completed: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", completed: false });
  }

  return (
    <form className={MyStyle.todoform} onSubmit={handleSubmit}>
      <div className={MyStyle.inputContainer}>
        <input
          className={MyStyle.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, completed: false })}
          type="text"
          value={todo.name}
          placeholder="Enter your Todo.."
        />
        <button className={MyStyle.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
