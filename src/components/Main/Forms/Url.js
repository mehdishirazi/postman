import React from 'react'

const Url = (props) => {
    return (
        <div>
            <h1>Call your API</h1>
            <input className={props.input} onChange={props.urlHandleChange} type="text" placeholder="VERB"></input>
            <input className={props.input} onChange={props.urlHandleChange} type="text" placeholder="URL"></input>
            <button onClick={props.fetchApiCall} className={props.class}>Call Your API</button>
        </div>
    )
}

export default Url