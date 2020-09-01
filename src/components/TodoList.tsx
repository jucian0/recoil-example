import "./../styles.css";
import React from "react";
import { context } from "../state/state";
import { useMState, useOnDispatch } from "./../lib";

const TodoList = () => {

   const [todos, { toggleTodo, removeTodo }] = useMState(context, state => state.todos)

   useOnDispatch(context, "toggleTodo", () => {
      console.log("toggleTodo")
   })

   return (
      <section>
         <ul>
            {todos.map((todo: any) => (
               <li key={todo.id}>
                  {todo.complete ? <s>{todo.text}</s> : todo.text}
                  <div>
                     <button
                        onClick={() => toggleTodo(todo.id)}>
                        Toggle
                </button>
                     <button
                        onClick={() => removeTodo(todo.id)} >
                        Remove
                </button>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}

export default TodoList;