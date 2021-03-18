import React, { Component} from 'react'

class Form extends Component{

    constructor() {
        super();

        this.state = {
            name: "",
            commnet: "",
            color: "green"
        }

        this.commentChangeHandler = this.commentChangeHandler.bind(this)
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.colorChangeHandler = this.colorChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    nameChangeHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    commentChangeHandler(event) {
        this.setState({
            comment: event.target.value
        })
    }

    colorChangeHandler(event) {
        this.setState({
            color: event.target.value
        })
    }

    submitHandler(event) {
        alert(`${this.state.name} says, ${this.state.comment} and color: ${this.state.color}`)
        event.preventDefault()
        this.setState({
            name: "",
            comment: "",
            color: "green"
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
                    </div>
                    <div>
                        <select value={this.state.color} onChange={this.colorChangeHandler}>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default Form
