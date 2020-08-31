import React from 'react'

const Bodies = (props) => {
    return(
        <div className={props.className}>
        <h3>Add Bodies(--data)</h3>
        <br></br>
        <button onClick={props.click}>+</button>
        <input type="text" placeholder="key" />
        <input type="text" placeholder="value" />
        <br />
    </div>
    )
}

export default Bodies