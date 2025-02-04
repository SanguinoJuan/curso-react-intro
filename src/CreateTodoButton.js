import "./CreateTodoButton.css";
import { ReactComponent as PlusIcon } from "./icons/mas.svg";

function CreateTodoButton() {
  return (
    <PlusIcon
      className="icon-plus"
      onClick={(event) => {
        console.log("click");
        console.log(event);
      }}
    />
  );
}
export { CreateTodoButton };
