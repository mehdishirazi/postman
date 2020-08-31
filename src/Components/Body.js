import React from 'react'
import Url from "./BodyElements/Url"
import Headers from "./BodyElements/Headers"
import Bodies from "./BodyElements/Bodies"
import "./Body.css"

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingValue: false,
            isShowingHeaders: ["0"],
            isShowingBodies: ["0"]
        }
    }

    addPramsHandler = () => {
        this.setState({
            isShowingValue: true
        })
    }

    clickHeaderHandler = (event) => {
        let headerNumber = Math.floor(event.timeStamp)
        let showingHeaders = this.state.isShowingHeaders
        showingHeaders.push(headerNumber)
        this.setState({
            isShowingHeaders: showingHeaders
        })
    }

    clickBodyHandler = (event) => {
        let bodyNumber = Math.floor(event.timeStamp)
        let showingBodies = this.state.isShowingBodies
        showingBodies.push(bodyNumber)
        this.setState({
            isShowingBodies: showingBodies
        })
    }

    render() {
        let headerTag = this.state.isShowingHeaders.map(item => <Headers key={item} click={this.clickHeaderHandler} className="params"/>)
        let bodyTag = this.state.isShowingBodies.map(item => <Bodies key={item} click={this.clickBodyHandler} className="params" />)
        return (
            <div className="body">
                <Url clicked={this.addPramsHandler}/>
                {this.state.isShowingValue ? headerTag : null}
                {this.state.isShowingValue ? bodyTag : null}
            </div>
        )
    }
}

export default Body