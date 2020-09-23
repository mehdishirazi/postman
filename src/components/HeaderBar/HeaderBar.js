import React from 'react'
import "../../style/Header.css"
import Postman from "../../assets/Postman.png"

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <nav className="flex-item-two">
                    <text className="api">APIs</text>
                    <text className="curl">curl</text>
                </nav>
            </div>
        )
    }
}

export default HeaderBar
