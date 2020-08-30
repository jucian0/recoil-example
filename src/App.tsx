import React from "react";
import { RecoilRoot } from 'recoil';
import CounterPage from "./Pages/Counter";

const App = () => (
  <RecoilRoot>
    <CounterPage />
  </RecoilRoot>
);

export default App;
