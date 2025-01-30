import "./TodoItem.css";
function TodoItem({ text, completed }) {
  return (
    <li>
      <span>v</span>
      <p>{text}</p>
      <span>x</span>
    </li>
  );
}

export { TodoItem };
