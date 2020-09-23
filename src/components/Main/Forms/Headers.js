import React from 'react'
import Header from './Header'
import "../../../style/Body.css"


const Headers = (props) => {
    let headerList = props.header.map((item, index) => <Header
        key={item.id}
        headerHandleChange={(event) => props.headerHandleChange(item.id, event)}
        headerClass="params-header"
        btnClass={props.minusBtn}
        inputClass={props.input}
        delete={() => props.delete(index)} />)
    return (
        <div className={props.className}>
            <div>
                <button onClick={props.click} className={props.btnStyle}>+ Add Header(-H)</button>
            </div>
            <div className="params-header">
                {props.isShowingHeader ? headerList : null}
            </div>
            <br />
        </div>
    )
}

export default Headers