import React from 'react'

const Url = (props) => {
    return (
        <div>
            <h1>Call your API</h1>
            <input type="text" placeholder="VERB"></input>
            <input type="text" placeholder="URL"></input>
            <button onClick={props.clicked}>Params</button>
        </div>
    )
}

export default Url