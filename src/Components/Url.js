import React from 'react'

const Url = (props) => {
    return (
        <div>
            <h1>Call your API</h1>
            <input onChange={props.urlHandleChange} type="text" placeholder="VERB"></input>
            <input onChange={props.urlHandleChange} type="text" placeholder="URL"></input>
            <button onClick={props.clicked}>Params</button>
            {props.isShowingFetchApi ? <button onClick={props.fetchApiCall}>Fetch Your API</button> : null}
        </div>
    )
}

export default Url