import React, { useState } from 'react'


interface To {
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
}


const Input = ({todo,setTodo}:To) => {

    
 
  return (
    <div>
        <input type="text"  placeholder='yaz'/>
        <button>Tikla baba</button>
    </div>
  )
}

export default Input