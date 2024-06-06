import React, { useState } from 'react'
import { usetodo } from "../contexts/todoContext"

function TodoItem({ todo }) {
    const [istodoedit, setistodoedit] = useState(false)
    const [todomsg, settodomsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, ToggleComplete } = usetodo()

    const edittodo = () => {
        updateTodo(todo.id, { ...todo, todo: todomsg })
        setistodoedit(false)
    }
    const ToogleCompleted = () => {
        ToggleComplete(todo.id)
    }
    return (
        <div classname={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
    ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={ToogleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${istodoedit ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => settodomsg(e.target.value)}
                readOnly={!istodoedit}
            />
            <button className="inline-flex w-8 h-8 rounded-lg 
          text-sm border border-black/10 justify-center 
          items-center bg-gray-50 hover:bg-gray-100 shrink-0
           disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoedit) {
                        edittodo();
                    } else setistodoedit((prev) => !prev);
                }} disabled={todo.completed}

            >{istodoedit ? "📁" : "✏️"}</button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}>
             ❌
            </button>
        </div>
    )
}

export default TodoItem
