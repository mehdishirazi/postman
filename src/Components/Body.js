import React from 'react'
import Url from "./Url"
import Header from "./Header"
import Form from "./From"
import "../Style/Body.css"


class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingValue: false,
            url: [{ url: "", verb: "" }],
            header: [],
            body: []
        }
    }

    getHeaderValue = () => {
        let headerContent = {}
        let header = [...this.state.header]
        for (let element of header) {
            headerContent[element.key] = element.value
        }
        debugger
        return headerContent
    }

    getBodyValue = () => {
        let bodyContent = {}
        let body = [...this.state.body]
        for (let element of body) {
            if (element.key || element.value === "") {
                return {}
            } else {
                bodyContent[element.key] = element.value
            }
        }
        debugger
        return bodyContent
    }

    fetchApi = (url, verb) => {
        console.log(this.state)
        debugger
        let header = this.getHeaderValue()
        let form = this.getBodyValue()
        debugger
        fetch(url, {
            method: verb,
            headers: header,
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(mehdi => console.log(mehdi))
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
        let urlValues = [...this.state.url]
        let value = event.target.placeholder
        if (value === "VERB") {
            urlValues[0].verb = event.target.value.toUpperCase()
        } else {
            urlValues[0].url = event.target.value
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
        let headerElement = this.state.header.map((item, index) => {
            return <Header
                key={item.id}
                headerHandleChange={(event) => this.headerHandleChange(event, item.id)}
                delete={() => this.deleteHeaderHandler(index)}
                click={this.clickHeaderHandler}
                className="params" />
        })
        let formElement = this.state.body.map((item, index) => {
            return <Form
                key={item.id}
                formHandleChange={(event) => this.formHandleChange(event, item.id)}
                delete={() => this.deleteFormHandler(index)}
                click={this.clickFormHandler}
                className="params" />
        })
        return (
            <div className="body">
                <Url
                    fetchApiCall={() => this.fetchApi(this.state.url[0].url, this.state.url[0].verb)}
                    isShowingFetchApi={this.state.isShowingValue}
                    urlHandleChange={(event) => this.urlHandleChange(event)}
                    clicked={this.addPramsHandler} />
                {this.state.isShowingValue ? headerElement : null}
                {this.state.isShowingValue ? formElement : null}
            </div>
        )
    }
}

export default Body