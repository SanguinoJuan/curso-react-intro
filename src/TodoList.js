function TodoList({ children }) {
  return (
    <ul
      style={{
        listStyle: "none",
        width: "50vh",
        margin: "0",
        padding: "0",
      }}
    >
      {children}
    </ul>
  );
}

export { TodoList };
