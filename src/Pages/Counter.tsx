// @flow 
import React from 'react'
import Counter from './../components/Counter'
import CounterButtons from './../components/Display'

export default function CounterPage() {

   return (
      <>
         <h1 style={{ textAlign: 'center' }}>Counter Example</h1>
         <CounterButtons />
         <Counter />
      </>
   )
}