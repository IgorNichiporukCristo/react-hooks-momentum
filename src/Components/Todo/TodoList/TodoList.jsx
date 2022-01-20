import React, { useState } from "react"
import TodoContent from "../TodoContent/TodoContent"
import TodoForm from "../TodoForm/TodoForm"
import "./todo-list.scss"

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if(todo.text) {
      setTodos([todo, ...todos])
    } else{
      return 
    }
  }

  const completeTodo = id => {
    let updateTodos = todos.map( todo => {
      if (todo.id === id) {
        todo.isComplete =! todo.isComplete
      }
      console.log(todo)
      return todo
    })
    setTodos(updateTodos)
  }
  const updateTodo = (todoId, newValue) => {
    if (newValue.text) {
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    return
  };
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id != id)
    setTodos(removeArr)
  }

  return(
    <div className="todo-list">
      <span>Todo</span>
      <TodoForm onSubmit={addTodo}/>
      <TodoContent 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList