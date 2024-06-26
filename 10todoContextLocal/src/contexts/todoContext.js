import { createContext,useContext } from "react";

export const todoContext=createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false,
    }],
    addTodo:(todo)=>
        {
            todos.add
        },
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    ToggleComplete:(id)=>{}
})

export const usetodo=()=>{
    return useContext(todoContext)
}

export const TodoProvider=todoContext.Provider