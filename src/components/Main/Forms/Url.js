import React from 'react'

const Url = (props) => {
    return (
        <div>
            <h1>Call your API</h1>
            <input className={props.input} onChange={props.urlHandleChange} type="text" placeholder="VERB"></input>
            <input className={props.input} onChange={props.urlHandleChange} type="text" placeholder="URL"></input>
            <button onClick={props.clicked} className={props.class}>Params</button>
            {props.isShowingFetchApi ? <button onClick={props.fetchApiCall} className={props.class}>Fetch Your API</button> : null}
        </div>
    )
}

export default Url