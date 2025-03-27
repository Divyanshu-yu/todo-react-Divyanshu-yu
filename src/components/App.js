import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

        const [todo,setTodo] = useState("")
        const [tasks,setTasks] = useState([])

        const handleSubmit=()=>{
         if(todo.trim() !== ""){
              setTasks([...tasks,todo])
              setTodo("")
         }   
        };


        const handleDelete=(index)=>{
          const updatedTasks = [...tasks];
          updatedTasks.splice(index,1);
          setTasks(updatedTasks);

        }
        
  return (
    <div className="tododiv">

        <h1 className="todoh1">To-Do list</h1>

        <div className="addcontent">
        <textarea className="input" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></textarea>
        <button onClick={handleSubmit}>AddToDo</button>
        </div>
      
      <div className="box2">
        <ul>
          {tasks.map( (t,index) => (
            <li className="tasklist" key={index}> 
            <p>{t}</p>
            <button onClick={()=> handleDelete(index)}>Delete</button>
            </li>

       ))}
        </ul>
        </div>
    </div>
  )
}

export default App
