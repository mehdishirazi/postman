import React from 'react'
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Main from "./components/Main/Main"
import "./style/App.css"


class App extends React.Component {
    render() {
        return (
            <div className="main">
                <HeaderBar />
                <Main />
            </div>
        )
    }
}

export default App
