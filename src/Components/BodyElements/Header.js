import React from 'react'

const Header = (props) => {
    return (
        <div className={props.className}>
            <h3>Add Header(-H)</h3>
            <br></br>
            <button onClick={props.click}>+</button>
            <input type="text" placeholder="key" />
            <input type="text" placeholder="value" />
            <br />
        </div>
    )
}

export default Header