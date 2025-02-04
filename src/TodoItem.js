import "./TodoItem.css";
import { ReactComponent as CheckIcon } from "./icons/check.svg";
import { ReactComponent as CloseIcon } from "./icons/cerrar.svg";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <CheckIcon
        className={`icon-check ${completed && "icon-check--active"}`}
        onClick={onComplete}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <CloseIcon className="icon-close" onClick={onDelete} />
    </li>
  );
}

export { TodoItem };
