import React from 'react'
import "../../../style/Body.css"

const Url = (props) => {
    return (
        <div className="url">
            <h1 className="url-title">Call your API</h1>
            <div className="input-rul">
                <input className={props.inputVerb} onChange={props.urlHandleChange} type="text" placeholder="VERB"></input>
                <input className={props.inputUrl} onChange={props.urlHandleChange} type="text" placeholder="URL"></input>
                <button onClick={props.fetchApiCall} className={props.class}>Call Your API</button>
            </div>
        </div>
    )
}

export default Url