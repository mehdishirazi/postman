import React from 'react'

let TableHeader = (props) => {
    let header = []
    for (let element in props.info){
        header.push(element)
    }
let headerValue = header.map((item, index) => <th key={index}>{item}</th>)
    return(
        <tr>
            {headerValue}
        </tr>
    )
}

export default TableHeader