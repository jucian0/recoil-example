import "./../styles.css";
import React from "react";
import { atom, useRecoilState } from 'recoil'

export const counterAtom = atom({
    key: 'counter',
    default: 0
})


const TodoForm = () => {

    const [counter, setCounter] = useRecoilState(counterAtom);

    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2>Recoil</h2>
            <form style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <button type="button" onClick={() => setCounter(state => state + 1)}>Add</button>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <span style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>Get value using useRecoilState</span>
                    <span style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>{counter}</span>
                </div>
                <button type="button" onClick={() => setCounter(state => state - 1)}>Remove</button>
            </form>
        </section>
    );
}

export default TodoForm;


