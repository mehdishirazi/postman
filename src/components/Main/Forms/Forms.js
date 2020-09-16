import React from 'react'
import Form from './Form'
import "../../../style/Body.css"


const Forms = (props) => {
    let formList = props.form.map((item, index) => <Form key={item.id} formClass="params-header" btnClass={props.minusBtn} inputClass={props.input} delete={() => props.delete(index)} />)
    return (
        <div className={props.className}>
            <div>
                <button onClick={props.click} className={props.btnStyle}>+ Add Form(--data)</button>
            </div>
            <div className="params-header">
                {props.isShowingForm ? formList : null}
            </div>
            <br />
        </div>
    )
}

export default Forms