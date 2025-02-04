import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return total === completed ? (
    <h1>Has completado todos los ToDos</h1>
  ) : (
    <h1>
      Has completado <strong>{completed}</strong> de <strong>{total}</strong>{" "}
      ToDos
    </h1>
  );
}

export { TodoCounter };
