import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";

import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { error, loading, searchedtodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ocurrió un error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {!loading && !searchedtodos.length && <p>Crear un To-Do</p>}
        {searchedtodos.map((todo) => (
          <TodoItem
            complete={todo.complete}
            text={todo.text}
            key={todo.id}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      <Modal title="Crear nuevo To-do">
        <TodoForm />
      </Modal>
    </React.Fragment>
  );
}

export { AppUI };
