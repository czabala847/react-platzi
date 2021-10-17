import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CreateTodoButton() {
  return (
    <button
      className="btn btn-blue"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <span className="mr-3">Nuevo </span>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export { CreateTodoButton };
