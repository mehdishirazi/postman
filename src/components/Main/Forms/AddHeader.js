import React from 'react'

const AddHeader = (props) => {
    return (
        <div>
            <button onClick={props.delete} className={props.minusBtn}>-</button>
            <input className={props.input} onChange={props.changed} type="text" placeholder="key" />
            <input className={props.input} onChange={props.changed} type="text" placeholder="value" />
        </div>
    )
}

export default AddHeader