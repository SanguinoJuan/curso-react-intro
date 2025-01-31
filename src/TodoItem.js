import "./TodoItem.css";
import { ReactComponent as CheckIcon } from "./icons/check.svg";
import { ReactComponent as CloseIcon } from "./icons/cerrar.svg";

function TodoItem({ text, completed }) {
  return (
    <li>
      <CheckIcon className="icon-check" />
      <p>{text}</p>
      <CloseIcon className="icon-close" />
    </li>
  );
}

export { TodoItem };
