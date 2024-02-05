import TodoItem from "./TodoItem";
import MyStyle from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((item1, item2) => Number(item1.completed) - Number(item2.completed));

  return (
    <div className={MyStyle.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
