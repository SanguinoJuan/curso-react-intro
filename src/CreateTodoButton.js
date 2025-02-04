import "./CreateTodoButton.css";
import { ReactComponent as PlusIcon } from "./icons/mas.svg";
import React from "react"; // Asegúrate de importar React

function CreateTodoButton({ addTodo }) {
  // Estado para manejar el texto de la nueva tarea
  const [newTodoText, setNewTodoText] = React.useState("");
  // Estado para mostrar u ocultar el campo de texto
  const [isInputVisible, setIsInputVisible] = React.useState(false);

  const handleAddClick = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText); // Llama a la función addTodo que agrega la tarea
      setNewTodoText(""); // Resetea el texto después de agregar
      setIsInputVisible(false); // Oculta el input
    }
  };

  return (
    <div className="create-todo-button">
      {isInputVisible ? (
        <div>
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)} // Actualiza el texto de la nueva tarea
            placeholder="Escribe tu nueva tarea"
            autoFocus // Focaliza el campo automáticamente cuando se abre
          />
          <button onClick={handleAddClick}>Agregar Tarea</button>
        </div>
      ) : (
        <PlusIcon
          className="icon-plus"
          onClick={() => setIsInputVisible(true)} // Muestra el input cuando se hace clic en el ícono
        />
      )}
    </div>
  );
}

export { CreateTodoButton };
