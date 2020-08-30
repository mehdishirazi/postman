import React from 'react'
import Url from "./BodyElements/Url"
import Headers from "./BodyElements/Headers"
import Bodies from "./BodyElements/Bodies"

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingValue: false
        }
    }

    addPramsHandler = () => {
        this.setState({
            isShowingValue: true
        })
    }

    render() {
        return (
            <div>
                <Url clicked={this.addPramsHandler}/>
                {this.state.isShowingValue ? <Headers /> : null}
                {this.state.isShowingValue ? <Bodies /> : null}
            </div>
        )
    }
}

export default Body