import React from "react";
import "./TodoCounter.css";

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, allTodos } = React.useContext(TodoContext);

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 d-flex align-items-center justify-content-between">
          <h2 className="my-5">
            Has completado {completedTodos} de {allTodos} TODOs
          </h2>
          <CreateTodoButton />
        </div>
      </div>
    </section>
  );
}

export { TodoCounter };
