import React from 'react'
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Main from "./components/Main/Main"


class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <Main />
            </div>
        )
    }
}

export default App
