import React, { useState, useEffect, useRef } from "react";
import "./todo-form.scss";

const TodoForm = (props) => {
  console.log("TodoForm")

  const [input, setInput] = useState(props.edit ? props.edit.value: "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })
  
  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
      isComplete: false
    })
    setInput("");
  }

  return (
    <form className="todo-form" onSubmit={ handleSubmit }>
      {props.edit ? (
        <div className="form-edit">
          <input 
            type="text"
            className="todo-input edit" 
            placeholder="update item"
            value={ input }
            onChange={ handleChange }
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </div> 
      ) : (
        <div>
          <input 
            type="text"
            className="todo-input" 
            placeholder="Add a todo"
            value={ input }
            onChange={ handleChange }
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </div>
      ) }
    
    </form>
  );
}

export default TodoForm