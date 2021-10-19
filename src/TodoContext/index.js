import React from "react";

import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
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

    newTodo[positionTodo].complete = true;
    saveTodo(newTodo);
  };

  const addTodo = (name) => {
    let newTodo = [...todos];

    let id = newTodo.reduce((prev, current) =>
      prev.id > current.id ? prev.id : current.id
    );

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

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
