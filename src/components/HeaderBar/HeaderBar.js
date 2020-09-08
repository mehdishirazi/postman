import React from 'react'
import "../../style/Header.css"
import Postman from "../../assets/Postman.png"

class HeaderBar extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoadingImg: false
        }
    }

componentDidMount() {
    this.setState({isLoadingImg: true})
}

    render() {
        return (
            <div className="flex-container">
                {this.state.isLoadingImg ? <img src={Postman} className="flex-item-one" alt="Call your API"></img> : null}
                <nav className="flex-item-two">
                    <button className="api">APIs</button>
                    <button className="curl">curl</button>
                </nav>
            </div>
        )
    }
}

export default HeaderBar
