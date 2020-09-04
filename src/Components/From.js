import React from 'react'

const Form = (props) => {
    return(
        <div className={props.className}>
        <h3>Add Forms(--data)</h3>
        <br></br>
        <button onClick={props.click}>+</button>
        <button onClick={props.delete}>-</button>
        <input onChange={props.formHandleChange} type="text" placeholder="key" />
        <input onChange={props.formHandleChange} type="text" placeholder="value" />
        <br />
    </div>
    )
}

export default Form