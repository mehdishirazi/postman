import React from 'react'

let Header = (props) => {
    return (
        <div className={props.headerClass}>
            <button onClick={props.delete} className={props.btnClass}>-</button>
            <input className={props.inputClass} onChange={props.headerHandleChange} type="text" placeholder="key" />
            <input className={props.inputClass} onChange={props.headerHandleChange} type="text" placeholder="value" />
        </div>
    )
}

export default Header