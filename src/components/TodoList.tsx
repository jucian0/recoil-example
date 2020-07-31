import "./../styles.css";
import React from "react";
import { useRecoilValue, selector } from "recoil";
import { counterAtom } from "./TodoForm";

const valueSelector = selector({
  key: "selector",
  get: ({ get }) => {
    const value = get(counterAtom)
    return value * 2
  }
})

const TodoList = () => {

  const value = useRecoilValue(valueSelector);

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <span style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>Selector return value * 2</span>
        <span style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>{value}</span>
      </div>
    </section>
  );
}

export default TodoList;

//state management react #redux #react #javascript   #100DaysOfCode https://github.com/Jucian0/infinity-state

