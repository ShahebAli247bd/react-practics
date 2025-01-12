import React, { useEffect, useState } from 'react'

const Todos = () => {
      const [todos, setTodos] = useState([])
      
      useEffect(() => {
            async function getTodos() {
                  const respose = await fetch("https://jsonplaceholder.typicode.com/todos")
                  const data = await respose.json()
                  if(data && data.length) setTodos(data)                  
            }
            getTodos();
      }, [])
      
 

  return (
    <div>
              <ul>
                    {todos.map((todo, index) => (
                          <div key={todo.id} className='flex gap-4'>
                                <li>{todo.id}</li>
                                <li>{todo.title}</li>
                                <li className='text-red-300'>{todo.completed? "Completed":"Not Completed" }</li>
                          </div>
                    ))}
      </ul>
    </div>
  )
}

export default Todos

