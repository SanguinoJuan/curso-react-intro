import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
/* const defaultTodos = [
{ text: "Viajar con mi novia", completed: true },
{ text: "Tomar el curso de intro a React", completed: false },
{ text: "Llorar con la llorona", completed: false },
{ text: "LALALALA", completed: false },
{ text: "Juan", completed: false },
];

localStorage.setItem(
  "todos_V1",defaultTodos
) */
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  return [item, saveItem];
}
function App() {
  const [todos, saveTodos] = useLocalStorage("todos_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchValuedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
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
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchValuedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        addTodo={(text) => saveTodos([...todos, { text, completed: false }])}
      />
    </div>
  );
}

export default App;
