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
            url: [],
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

    urlHandleChange = (event) => {
        let urlValues = [{ verb: "", url: "" }]
        let value = event.target.placeholder
        if (value === "VERB") {
            urlValues[0][value] = event.target.value.toUpperCase()
        } else {
            urlValues[0][value] = event.target.value
        }
        this.setState({
            url: urlValues
        })
    }

    formHandleChange = (event, id) => {
        const value = event.target.placeholder
        const indexCehck = this.state.body.findIndex(item => {
            return id === item.id
        })
        const bodyChangeValues = [...this.state.body]
        bodyChangeValues[indexCehck][value] = event.target.value
        this.setState({
            body: bodyChangeValues
        })
    }

    headerHandleChange = (event, id) => {
        const value = event.target.placeholder
        const inedexCheck = this.state.header.findIndex(item => {
            return id === item.id
        })
        const headerChangeValues = [...this.state.header]
        headerChangeValues[inedexCheck][value] = event.target.value
        this.setState({
            header: headerChangeValues
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
            return <Header key={item.id} headerHandleChange={(event) => this.headerHandleChange(event, item.id)} delete={() => this.deleteHeaderHandler(index)} click={this.clickHeaderHandler} className="params" />
        })
        let formElement = this.state.body.map((item, index) => {
            return <Form key={item.id} formHandleChange={(event) => this.formHandleChange(event, item.id)} delete={() => this.deleteFormHandler(index)} click={this.clickFormHandler} className="params" />
        })
        return (
            <div className="body">
                <Url isShowingFetchApi={this.state.isShowingValue} urlHandleChange={(event) => this.urlHandleChange(event)} clicked={this.addPramsHandler} />
                {this.state.isShowingValue ? headerElement : null}
                {this.state.isShowingValue ? formElement : null}
            </div>
        )
    }
}

export default Body