import "./../styles.css";
import React from "react";
import { useRecoilValue, selector, useRecoilState } from "recoil";
import { todoList } from "./TodoForm";


const listSelector = selector({
   key: "listSelector",
   get: ({ get }) => {
      const value = get(todoList)
      return value
   }
})

const TodoList = () => {

   const [todos, setTodos] = useRecoilState(todoList)

   const handleToggle = (id: string) => {
      const todosChanged = todos.map(todo => {
         if (todo.id === id) {
            return {
               ...todo,
               done: !todo.done
            }
         }
         return todo
      })
      setTodos(todosChanged)
   }

   const handleRemove = (id: string) => {
      const todosFiltered = todos.filter(todo => todo.id !== id)
      setTodos(todosFiltered)
   }

   return (
      <section>
         <ul>
            {todos.map(todo => (
               <li key={todo.id}>
                  {todo.done ? <s>{todo.text}</s> : todo.text}
                  <div>
                     <button onClick={() => handleToggle(todo.id)}>Toggle</button>
                     <button onClick={() => handleRemove(todo.id)}>Remove</button>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}

export default TodoList;