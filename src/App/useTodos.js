import React from "react";

import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  //LocalStorage
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
    sincronizeItem: sincronizeTodo,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const modalRef = React.createRef(null);

  // Todo counter
  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const allTodos = todos.length;

  //Todo Search
  let searchedtodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (id) => {
    const positionTodo = todos.findIndex((todo) => todo.id === id);
    let newTodo = [...todos];
    newTodo[positionTodo].complete = !newTodo[positionTodo].complete;
    saveTodo(newTodo);
  };

  const addTodo = (name) => {
    let newTodo = [...todos];
    let id;
    if (newTodo.length > 0) {
      id = newTodo.reduce((prev, current) =>
        prev.id > current.id ? prev.id : current.id
      );
    } else {
      id = 1;
    }

    newTodo.push({
      id: id + 1,
      complete: false,
      text: name,
    });

    saveTodo(newTodo);
  };

  const deleteTodo = (id) => {
    const positionTodo = todos.findIndex((todo) => todo.id === id);
    let newTodo = [...todos];

    newTodo.splice(positionTodo, 1);
    saveTodo(newTodo);
  };

  return {
    loading,
    error,
    completedTodos,
    allTodos,
    searchValue,
    setSearchValue,
    searchedtodos,
    completeTodo,
    deleteTodo,
    addTodo,
    modalRef,
    sincronizeTodo,
  };
}

export { useTodos };
