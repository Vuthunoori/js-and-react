import React from "react";
function Todolist({todos}){
  const todofiltered=todos.filter(todo=>todo.status==='completed');
  return (
    <div>
        <h2>completed todo's</h2>
        <ul>
        {
             todofiltered.map(todo=>(
                <li>key={todo.id}
                {todo.task}-{todo.status}
                </li>
             ))
        }
      
        </ul>
         
    </div>

  )
}
export default Todolist