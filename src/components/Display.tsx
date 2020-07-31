import "./../styles.css";
import React from "react";
import { useRecoilValue, selector } from "recoil";
import { counterAtom } from "./Counter";

const valueSelector = selector({
  key: "selector",
  get: ({ get }) => {
    const value = get(counterAtom)
    return value * 2
  }
})

const Display = () => {

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

export default Display;

