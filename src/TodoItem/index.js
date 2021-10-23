import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className="Todo-Item">
      <FontAwesomeIcon
        className={`icon ${props.complete ? "text-success" : "text-muted"} `}
        icon={faCheckSquare}
        onClick={props.onComplete}
      />
      <span className={`${props.complete && "text-decoration-line-through"}`}>
        {props.text}
      </span>
      <FontAwesomeIcon
        className="text-danger icon float-end"
        icon={faWindowClose}
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
