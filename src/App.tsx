import React, { useState } from 'react';

import './App.css';
import Input from './components/Input';
import Message from './components/Message';
import { Todos } from './types/Types';

function App() {

  const [todo,setTodo] = useState<string>('')
  const [todos,setTodos] = useState<Todos[]>([])

  console.log(todos)


  const addTodos = ()=>{
    if(todo) setTodos([...todos,{message:todo,id:todo.length +1}])
    setTodo('')
  }
  
   const delet =(id:number)=>{
    setTodos(todos.filter(tod =>tod.id !=id))

   }

  return (
    <div className="App">
      <Input 
      addTodos={addTodos}
      todo = {todo}
              setTodo= {setTodo}
      />
      <Message
       delet={delet}
      todos ={todos}/>
    </div>
  );
}

export default App;
