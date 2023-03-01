import React from 'react'
import { Todos } from '../types/Types'

type Props = {
    todos :Todos[]
    //foksiyon oldugu icin burrada disriya id gidecegti icin but-raua ay di yazaryz
    delet:(id:number)=> void
}

const Message = ({todos ,delet}:Props) => {
  return (
    <div>
        {
            todos.map((ex,i)=>(
                <div>{ex.message} -- <span onClick={()=>delet(ex.id)} style={{cursor:'pointer'}}>x</span></div>
            ))
        }
        
    </div>
  )
}

export default Message