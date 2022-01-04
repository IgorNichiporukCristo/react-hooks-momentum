import React from "react"
import './main.scss'
import Background from "./Background/Background";
import Clock from "./Clock/Clock";
import Weather from "./Weather/Weather";


const Main = () => {
    return (<div>
        <Clock />
        <Background />
        <Weather />
    </div>)
}

export default Main