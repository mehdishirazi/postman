import React from 'react'

const Header = (props) => {
    return (
        <div className={props.className}>
            <h3>Add Header(-H)</h3>
            <br></br>
            <button onClick={props.click} className={props.btnStyle}>+</button>
            <button onClick={props.delete} className={props.minusBtn}>-</button>
            <input className={props.input} onChange={props.headerHandleChange} type="text" placeholder="key" />
            <input className={props.input} onChange={props.headerHandleChange} type="text" placeholder="value" />
            <br />
        </div>
    )
}

export default Header