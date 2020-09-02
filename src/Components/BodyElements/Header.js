import React from 'react'

const Header = (props) => {
    return (
        <div className={props.className}>
            <h3>Add Header(-H)</h3>
            <br></br>
            <button onClick={props.click}>+</button>
            <button onClick={props.delete}>-</button>
            <input onChange={props.headerHandleChange} type="text" placeholder="key" />
            <input onChange={props.headerHandleChange} type="text" placeholder="value" />
            <br />
        </div>
    )
}

export default Header