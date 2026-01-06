import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todo,setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev)=>[{id : Date.now(),...todo},...prev])
  }

  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter((todo)=>todo.id!==id))
  }

  const editTodo = (id,todo) => {
    setTodo((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo : prevTodo))
  }

  const checkTodo = (id)=>{
    setTodo((prev)=>prev.map((todo)=>todo.id===id ? {...todo,completed : !todo.completed}: todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length>0) {
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])

  return (
    <TodoProvider value={{todo,addTodo,deleteTodo,editTodo,checkTodo}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
