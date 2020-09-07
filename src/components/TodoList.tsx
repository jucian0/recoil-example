import "./../styles.css";
import React from "react";
import { useRecoilValue, selector } from "recoil";
import { todoList } from "./TodoForm";


const listSelector = selector({
   key: "listSelector",
   get: ({ get }) => {
      const value = get(todoList)
      return value
   }
})

const TodoList = () => {

   const todos = useRecoilValue(listSelector);

   return (
      <section>
         <ul>
            {todos.map(todo => (
               <li key={todo.id}>
                  {todo.done ? <s>{todo.text}</s> : todo.text}
                  <div>
                     <button>Toggle</button>
                     <button>Remove</button>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}

export default TodoList;