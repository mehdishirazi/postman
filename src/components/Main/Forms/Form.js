import React from 'react'

const Form = (props) => {
    return (
        <div className={props.formClass}>
            <button onClick={props.delete} className={props.btnClass}>-</button>
            <div>
                <input className={props.inputClass} onChange={props.formHandleChange} type="text" placeholder="key" />
                <input className={props.inputClass} onChange={props.formHandleChange} type="text" placeholder="value" />
            </div>
        </div>
    )
}

export default Form