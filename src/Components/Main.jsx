import React,{ useEffect } from "react"
import './main.scss'
import Background from "./Background/Background";
import Clock from "./Clock/Clock";


const App = () => {
    return (<div className="main-content">
        <Clock />
        <h3>Date1 : {new Date().toDateString()}</h3>
        <Background />
    </div>)
}

export default App