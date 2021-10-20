import React from "react";

// bootstrap / dist / js / bootstrap.min.js;
import { Modal } from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

function TodoForm({ addTodo, modalRef }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    // const modal = document.querySelector("#ExampleModal");
    const modal = modalRef.current;
    const instanceModal = Modal.getInstance(modal);
    instanceModal.hide();
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="nuevo-todo"
          rows="3"
          value={newTodoValue}
          placeholder="Ir al cine a las 8:00"
          onChange={onChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
}

export { TodoForm };
