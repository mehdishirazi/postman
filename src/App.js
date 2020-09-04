import React from 'react'
import HeaderBar from "./Components/HeaderBar"
import Body from "./Components/Body"

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <Body />
            </div>
        )
    }
}

export default App
