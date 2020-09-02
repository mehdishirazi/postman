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
            header: [],
            body: []
        }
    }

    addPramsHandler = () => {
        this.setState({
            isShowingValue: true,
            header: [
                {
                    id: 1,
                    key: "",
                    value: ""
                }
            ],
            body: [
                {
                    id: 1,
                    key: "",
                    value: ""
                }
            ]
        })
    }

    clickHeaderHandler = () => {
        let headerNumber = [...this.state.header]
        let headerValue = headerNumber.length + 1
        headerNumber.push({ id: headerValue, key: "", value: "" })
        this.setState({
            header: headerNumber
        })

    }

    deleteHeaderHandler = (index) => {
        const headerDeleted = [...this.state.header]
        headerDeleted.splice(index, 1)
        this.setState({
            header: headerDeleted
        })
    }

    clickFormHandler = () => {
        debugger
        let formNumber = [...this.state.body]
        let formValue = formNumber.length + 1
        formNumber.push({ id: formValue, key: "", value: "" })
        this.setState({
            body: formNumber
        })
    }

    deleteFormHandler = (index) => {
        const formDeleted = [...this.state.body]
        formDeleted.splice(index, 1)
        this.setState({
            body: formDeleted
        })
    }

    render() {
        console.log(this.state)
        let headerElement = this.state.header.map((item, index) => {
            return <Header key={item.id} delete={() => this.deleteHeaderHandler(index)} click={this.clickHeaderHandler} className="params" />
        })
        let formElement = this.state.body.map((item, index) => {
            return <Form key={item.id} delete={() => this.deleteFormHandler(index)} click={this.clickFormHandler} className="params" />
        })
        return (
            <div className="body">
                <Url clicked={this.addPramsHandler} />
                {this.state.isShowingValue ? headerElement : null}
                {this.state.isShowingValue ? formElement : null}
            </div>
        )
    }
}

export default Body