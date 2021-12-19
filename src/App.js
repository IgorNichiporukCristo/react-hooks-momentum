import React from "react"
import "./fetch";

function App() {
    return (<div>
        <fetch />
        <h2>Welcome to React App</h2>
        <h3>Date1 : {new Date().toDateString()}</h3>
    </div>)
}

export default App