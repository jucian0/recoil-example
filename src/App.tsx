import React from "react";
import TodoList from "./components/Display";
import TodoForm from "./components/Counter";
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <TodoForm />
    <TodoList />
  </RecoilRoot>
);

export default App;
