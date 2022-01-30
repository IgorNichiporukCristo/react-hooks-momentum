import React,{useState} from "react";
import './main.scss';
import Background from "./Background/Background";
import Clock from "./Clock/Clock";
import Weather from "./Weather/Weather";
import TodoList from "./Todo/TodoList/TodoList";


function Main() {
  const [ show, useShow ] = useState(false);

  const handleTodoShow = () => {
    useShow(!show);
  }

  return (
    <div className="body">
      <Background /> 
      <div className="main-content">
        <Weather />
        <Clock />
        <TodoList handleTodoShow={handleTodoShow} show={show}/>
        <div className={ show ? "main__todo-button-show todo-button-show" : "main__todo-button-show" } onClick={() => handleTodoShow()}><span>TODO</span></div>
      </div>
    </div> 
  )
}

export default Main;