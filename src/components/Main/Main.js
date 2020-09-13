import React from 'react'
import Headers from './Forms/Header'
import Url from './Forms/Url'
import Form from "./Forms/From"
import Table from "./Table"
import "../../style/Body.css"
import TableHeader from './TableHeader'


class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingValue: false,
            url: [{ url: "", verb: "" }],
            header: [],
            body: [],
            data: null
        }
    }

    getHeaderValue = () => {
        let headerContent = {}
        let header = [...this.state.header]
        for (let element of header) {
            headerContent[element.key] = element.value
        }
        return headerContent
    }

    getBodyValue = () => {
        let bodyContent = {}
        let body = [...this.state.body]
        for (let element of body) {
            if (element.key === "" || element.value === "") {
                return bodyContent = null
            } else {
                bodyContent[element.key] = element.value
            }
        }
        return bodyContent
    }

    gatherRequestparams = (verb, header, form) => {
        let objectForFetch = {}
        objectForFetch.method = verb
        objectForFetch.headers = header
        if (form === null) {
            return objectForFetch
        } else {
            let body = JSON.stringify(form)
            objectForFetch.body = body
        }
        return objectForFetch
    }

    fetchApi = (url, verb) => {
        let header = this.getHeaderValue()
        let form = this.getBodyValue()
        let requestparams = this.gatherRequestparams(verb, header, form)

        fetch(url, requestparams)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(Error => console.log(Error))
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

    headerHandleChange = (event) => {
        // debugger
        // // const value = event.target.placeholder
        // // const inedexCheck = this.state.header.findIndex(item => {
        // //     return id === item.id
        // // })
        // // const headerChangeValues = [...this.state.header]
        // // headerChangeValues[inedexCheck][value] = event.target.value
        // this.setState({
        //     header: headerChangeValues
        // })
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

        let TableView
        this.state.data === null ? TableView = null : TableView = this.state.data.map((item, index) => <Table info={item} key={index} />)
        return (
            <div className="body">
                <Url
                    fetchApiCall={() => this.fetchApi(this.state.url[0].url, this.state.url[0].verb)}
                    isShowingFetchApi={this.state.isShowingValue}
                    urlHandleChange={(event) => this.urlHandleChange(event)}
                    clicked={this.addPramsHandler}
                    class="btn"
                    input="input" />
                <div className="infoDiv">
                    <div>
                        <Headers
                            headerHandleChange={(event) => this.headerHandleChange(event)}
                            headers={this.state.header}
                            delete={() => this.deleteHeaderHandler()}
                            click={this.clickHeaderHandler}
                            className="params"
                            btnStyle="paramsBtn"
                            minusBtn="minusBtn"
                            input="input" />
                    </div>
                    <div>
                        <Form
                            delete={() => this.deleteFormHandler()}
                            click={this.clickFormHandler}
                            className="params"
                            btnStyle="paramsBtn"
                            minusBtn="minusBtn"
                            input="input" />
                    </div>
                </div>
                {this.state.data === null ? null :
                    <table>
                        <tbody>
                            {this.state.data === null ? null : <TableHeader info={this.state.data[0]} />}
                            {TableView}
                        </tbody>
                    </table>}
            </div>
        )
    }
}

export default Body
