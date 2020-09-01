import "./../styles.css";
import React from "react";

const TodoList = () => {

   return (
      <section>
         <ul>
            {todos.map((todo: any) => (
               <li key={todo.id}>
                  {todo.complete ? <s>{todo.text}</s> : todo.text}
                  <div>
                     <button
                     //onClick={() => toggleTodo(todo.id)}
                     >
                        Toggle
                </button>
                     <button
                     //onClick={() => removeTodo(todo.id)}
                     >
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