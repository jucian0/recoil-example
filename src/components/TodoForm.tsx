import "./../styles.css";
import React from "react";

const TodoList = () => {

   return (
      <section>
         <ul>
            <form>
               <input type="text" placeholder="Todo" />
               <button>Add</button>
               <button>Get Api Todos</button>
            </form>
         </ul>
      </section>
   );
}

export default TodoList;