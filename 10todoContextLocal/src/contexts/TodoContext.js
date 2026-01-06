import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : [
        {
            id : 1,
            todo : "todo msg",
            completed : false
        }
    ],
    addTodo : (todo) => {} ,
    deleteTodo : (id) => {},
    editTodo : (id,todo) => {},
    checkTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}