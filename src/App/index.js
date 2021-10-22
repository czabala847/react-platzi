// import './App.css';
import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoHeader } from "../TodoHeader";

import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoEmpty } from "../TodoEmpty";

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
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} allTodos={allTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedtodos={searchedtodos}
        allTodos={allTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        onEmptyResult={(value) => <p>No hay resultados para {value}</p>}
        render={(todo) => (
          <TodoItem
            complete={todo.complete}
            text={todo.text}
            key={todo.id}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      />

      <Modal reference={modalRef} title="Crear nuevo To-do">
        <TodoForm addTodo={addTodo} modalRef={modalRef} />
      </Modal>
    </React.Fragment>
  );
}

export default App;
