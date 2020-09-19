import React from 'react'
import Headers from './Forms/Headers'
import Url from './Forms/Url'
import Form from "./Forms/Forms"
import Table from "./Table"
import "../../style/Body.css"
import TableHeader from './TableHeader'


class Body extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            isShowingHeader: false,
            isShowingForm: false,
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

    addHeader = () => {
        if (this.state.isShowingHeader === false) {
            this.setState({
                isShowingHeader: true,
                header: [
                    {
                        id: 1,
                        key: "",
                        value: ""
                    }
                ]
            })
            this.clickHeaderHandler()
        } else {
            this.clickHeaderHandler()
        }
    }

    addForm = () => {
        if(this.state.isShowingForm === false){
            this.setState({
                isShowingForm: true,
                body: [
                    {
                        id: 1,
                        key: "",
                        value: ""
                    }
                ]
            })
            this.clickFormHandler()
        } else {
            this.clickFormHandler()
        }
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

    headerHandleChange = (id, event) => {
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
        let TableView
        this.state.data === null ? TableView = null : TableView = this.state.data.map((item, index) => <Table info={item} key={index} />)
        return (
            <div className="body">
                <Url
                    fetchApiCall={() => this.fetchApi(this.state.url[0].url, this.state.url[0].verb)}
                    isShowingFetchApi={this.state.isShowingValue}
                    urlHandleChange={(event) => this.urlHandleChange(event)}
                    class="btn"
                    input="input" />
                <div className="infoDiv">
                    <div>
                        <Headers
                            isShowingHeader={this.state.isShowingHeader}
                            headerHandleChange={(id, event) => this.headerHandleChange(id, event)}
                            delete={(index) => this.deleteHeaderHandler(index)}
                            click={this.addHeader}
                            header={this.state.header}
                            className="params"
                            btnStyle="paramsBtn"
                            minusBtn="minusBtn"
                            input="input" />
                        <Form
                            isShowingForm={this.state.isShowingForm}
                            formHandleChange={(event, id) => this.formHandleChange(event, id)}
                            delete={(index) => this.deleteFormHandler(index)}
                            click={this.addForm}
                            form={this.state.body}
                            className="params"
                            btnStyle="paramsBtn"
                            minusBtn="minusBtn"
                            input="input" />
                    </div>
                    <div>
                        {/* {this.state.isShowingValue ? <input /> : null} */}
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
