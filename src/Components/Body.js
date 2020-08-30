import React from 'react'
import Url from "./BodyElements/Url"
import Headers from "./BodyElements/Headers"
import Bodies from "./BodyElements/Bodies"
import "./Body.css"

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
            <div className="body">
                <Url clicked={this.addPramsHandler}/>
                {this.state.isShowingValue ? <Headers className="params" /> : null}
                {this.state.isShowingValue ? <Bodies className="params" /> : null}
            </div>
        )
    }
}

export default Body