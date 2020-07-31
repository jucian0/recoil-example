import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <TodoForm />
    <TodoList />
  </RecoilRoot>
);

export default App;
