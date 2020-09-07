import "./../styles.css";
import React, { useState } from "react";
import { atom, useRecoilState } from "recoil";

type Todo = {
   text: string
   done: boolean
   id: string
}

export const todoList = atom<Array<Todo>>({
   key: 'todoList',
   default: []
})

const TodoList = () => {

   const [todos, setTodos] = useRecoilState(todoList)
   const [input, setInput] = useState('')

   const handleAdd = () => {
      const todo = {
         text: input,
         done: false,
         id: Math.random().toString()
      }
      setTodos(state => [...state, todo])
      setInput('')
   }

   return (
      <section>
         <ul>
            <form>
               <input type="text" placeholder="Todo" value={input} onChange={e => setInput(e.target.value)} />
               <button type="button" onClick={handleAdd}>Add</button>
               <button type="button">Get Api Todos</button>
            </form>
         </ul>
      </section>
   );
}

export default TodoList;