import React from 'react'
import TodoForm from './../components/TodoForm'
import TodoList from './../components/TodoList'

export default function TodoPage() {

   return (
      <>
         <br />
         <h1 style={{ textAlign: 'center' }}>Todo Example</h1>
         <TodoForm />
         <TodoList />
      </>
   )
}