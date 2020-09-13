import React from 'react'
import Header from "./AddHeader"

const Headers = (props) => {
    let header = props.headers.map(item => <Header
        key={item.id}
        changed={props.headerHandleChange}
        input={props.input}
        delete={props.delete}
        minusBtn={props.minusBtn} />)

    return (
        <div className={props.className}>
            <h3>Add Header(-H)</h3>
            <br></br>
            <button onClick={props.click} className={props.btnStyle}>+</button>
            <br />
            {header}
        </div>
    )
}

export default Headers