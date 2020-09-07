import React from "react";
import { RecoilRoot } from 'recoil';
import CounterPage from "./Pages/Counter";
import TodoPage from "./Pages/Todo";

const App = () => (
  <RecoilRoot>
    <CounterPage />
    <TodoPage />
  </RecoilRoot>
);

export default App;
