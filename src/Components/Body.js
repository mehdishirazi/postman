import React from 'react'
import Url from "./BodyElements/Url"
import Header from "./BodyElements/Header"
import Form from "./BodyElements/From"
import "./Body.css"


class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingValue: false,
            header: ["0"],
            body: ["0"]
        }
    }

    addPramsHandler = () => {
        this.setState({
            isShowingValue: true
        })
    }

    clickHeaderHandler = (event) => {
        let headerNumber = event.timeStamp
        let showingHeader = this.state.header
        showingHeader.push(headerNumber)
        this.setState({
            header: showingHeader
        })
    }

    clickBodyHandler = (event) => {
        let bodyNumber = event.timeStamp
        let showingBody = this.state.body
        showingBody.push(bodyNumber)
        this.setState({
            body: showingBody
        })
    }

    render() {
        let headerTag = this.state.header.map(item => <Header key={item} click={this.clickHeaderHandler} className="params"/>)
        let bodyTag = this.state.body.map(item => <Form key={item} click={this.clickBodyHandler} className="params" />)
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