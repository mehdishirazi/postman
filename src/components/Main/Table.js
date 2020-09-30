import React from 'react'

let Table = (props) => {
    let value =[]
    for (let element in props.info){
        value.push(props.info[element])
    }
    let Table = value.map((item, index) => <td key={index}>{item}</td>)
    return(
                <tr>
                    {Table}
                </tr>
    )
}

export default Table