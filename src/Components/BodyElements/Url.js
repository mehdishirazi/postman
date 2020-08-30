import React from 'react'

const Url = (props) => {
    return (
        <div>
            <input type="text" placeholder="VERB"></input>
            <input type="text" placeholder="URL"></input>
            <button onClick={props.clicked}>Params</button>
        </div>
    )
}

export default Url