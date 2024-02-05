import MyStyle from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }

  function handleClick(itemName) {
    const newTodos = todos.map((todoItem) =>
      todoItem.name === itemName
        ? { ...todoItem, completed: !todoItem.completed }
        : todoItem
    );
    setTodos(newTodos);
  }

  let changeText = "";

  if (item.completed === true) {
    changeText = MyStyle.changeOnClick;
  }

  return (
    <div className={MyStyle.item}>
      <div className={MyStyle.itemName}>
        <span className={changeText} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={MyStyle.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={MyStyle.line}></hr>
    </div>
  );
}
