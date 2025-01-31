import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
const defaultTodos = [
  { text: "Viajar con mi novia", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALA", completed: false },
];
function App() {
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Coloca los elementos en una columna
        justifyContent: "center", // Centra verticalmente
        alignItems: "center", // Centra horizontalmente
        height: "100vh", // Ocupa toda la altura de la pantalla
        textAlign: "center", // Centra el texto dentro de los elementos
      }}
    >
      <TodoCounter completed={3} total={4} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
