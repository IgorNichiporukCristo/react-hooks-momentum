import React, { useState } from "react";
import TodoContent from "../TodoContent/TodoContent";
import TodoForm from "../TodoForm/TodoForm";
import { BsChevronDoubleRight } from 'react-icons/bs';
import "./todo-list.scss";

const TodoList = ({ show, handleTodoShow }) => {
  console.log("todolist")
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(todo.text) {
      setTodos([todo, ...todos]);
    } else{
      return ;
    }
  }

  const completeTodo = id => {
    let updateTodos = todos.map( todo => {
      if (todo.id === id) {
        todo.isComplete =! todo.isComplete;
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  const updateTodo = (todoId, newValue) => {
    if (newValue.text) {
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }
    return ;
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id != id);
    setTodos(removeArr);
  }

  return(
    <div className={show? "todo-list todo-list-show": "todo-list"}>
      <div className="todo-list__title-close">
        <span className="todo-list__title">Todo</span>
        <BsChevronDoubleRight onClick={() => handleTodoShow()} className="todo-list__close" />
      </div>
      <TodoForm onSubmit={addTodo}/>
      <div className="content-countainer-todo">
        <TodoContent 
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
     
    </div>
  );
}

export default TodoList