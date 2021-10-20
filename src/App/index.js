// import './App.css';
import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHeader } from "../TodoHeader";

import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { useTodos } from "./useTodos";

function App() {
  const {
    error,
    loading,
    searchedtodos,
    completeTodo,
    deleteTodo,
    modalRef,
    completedTodos,
    allTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
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

      <Modal reference={modalRef} title="Crear nuevo To-do">
        <TodoForm addTodo={addTodo} modalRef={modalRef} />
      </Modal>
    </React.Fragment>
  );
}

export default App;
