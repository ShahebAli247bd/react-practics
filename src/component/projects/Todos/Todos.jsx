import React, { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState();

    const addTodoHandler = () => {
      setTodos((todos) => {
        return todos.concat({
          text: input,
          id: Math.floor(Math.random() * 100)
        })
      })
  }

  const removeTodoHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id != id)
    setTodos(newTodo)
  }

  console.log(todos)
    return (
        <div className="container flex flex-col justify-center items-center h-screen">
            <h2 className="text-5xl my-12">TODOS</h2>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-b w-full hover:ring-1 h-24 text-3xl outline-none px-12"
                />
                <button
                    onClick={addTodoHandler}
                    className="w-full hover:ring-1 h-24 text-3xl outline-none bg-slate-200 px-12"
                >
                    Add Todo
                </button>
            </div>

            <div className="">
                {todos?.map((todo) => (
                    <li key={todo.id} className="p-6 bg-slate-100">
                        {todo.id}. {todo.text}{" "}
                        <span
                            onClick={() => removeTodoHandler(todo.id)}
                            className="bg-red-400 rounded-full w-32 p-4"
                        >
                            X
                        </span>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Todos;
