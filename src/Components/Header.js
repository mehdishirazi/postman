import React from 'react'
import "./Header.css"
import Postman from "../Img/Postman.png"

const Header = () => {
    return (
        <div className="flex-container">
            <img src={Postman} className="flex-item-one"></img>
            <nav className="flex-item-two">
                <nav className="api">APIs</nav>
                <nav className="curl">curl</nav>
            </nav>
        </div>
    )
}

export default Header
