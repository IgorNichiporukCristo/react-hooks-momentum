import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from '../TodoForm/TodoForm';
import "./todo-content.scss";

const TodoContent = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  console.log("TodoContent")
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ""
    })
  };

  return todos.map((todo, index) => (
    (edit.id == todo.id ? <TodoForm edit={edit} onSubmit={submitUpdate}/>: 
    (<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit 
         onClick={() => setEdit({id: todo.id, value: todo.text})}
         className='edit-icon'
        />
      </div>
    </div>))
  ));
}

export default TodoContent;