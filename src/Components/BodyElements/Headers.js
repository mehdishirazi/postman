import React from 'react'

const Headers = () => {
    return (
        <div>
            <h1>Add Headers(-H)</h1>
            <button>+</button>
            <br></br>
            <input type="text" placeholder="key" />
            <input type="text" placeholder="value" />
            <br />
        </div>
    )
}

export default Headers