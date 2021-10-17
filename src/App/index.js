// import './App.css';
import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const todosDefault = [
//   {
//     id: 1,
//     text: "Estudiar React JS",
//     complete: false,
//   },
//   {
//     id: 2,
//     text: "Estudiar Angular JS",
//     complete: false,
//   },
//   {
//     id: 3,
//     text: "Terminar curso PHP pildoras informaticas Youtube",
//     complete: false,
//   },
//   {
//     id: 4,
//     text: "Estudiar curso practico de PHP",
//     complete: false,
//   },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
