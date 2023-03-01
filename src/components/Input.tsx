import React, { useState } from 'react'


interface To {
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addTodos :()=>void
}


const Input = ({todo,setTodo,addTodos}:To) => {

    console.log(todo,'input')
 
  return (
    <div>
        <input type="text"  value={todo} onChange={e=>setTodo(e.target.value)} placeholder='yaz'/>
        <button onClick={addTodos}>Tikla baba</button>
    </div>
  )
}

export default Input