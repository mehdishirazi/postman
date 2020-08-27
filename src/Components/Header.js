import React from 'react'
import "./Header.css"
import Postman from "../Img/Postman.png"

class Header extends React.Component {
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
                {this.state.isLoadingImg ? <img src={Postman} className="flex-item-one"></img> : null}
                <nav className="flex-item-two">
                    <nav className="api">APIs</nav>
                    <nav className="curl">curl</nav>
                </nav>
            </div>
        )
    }
}

export default Header
