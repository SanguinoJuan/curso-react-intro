import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    <h1>
      Has completado <strong>{completed}</strong> de <strong>{total}</strong>{" "}
      ToDos
    </h1>
  );
}

export { TodoCounter };
