import MyStyle from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={MyStyle.footer}>
      <span className={MyStyle.item}>Completed Todos: {completedTodos}</span>
      <span className={MyStyle.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
