import React from "react"
import './main.scss'
import Background from "./Background/Background";
import Clock from "./Clock/Clock";
import Weather from "./Weather/Weather";
import TodoList from "./Todo/TodoList/TodoList";


const Main = () => {
  return (
    <div>
      {/* <Background /> */}
      <div className="main-content">
        <Weather />
        <Clock />
        <TodoList />
      </div>
    </div> 
  )
}

export default Main