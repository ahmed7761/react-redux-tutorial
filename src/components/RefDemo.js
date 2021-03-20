import React, { Component } from 'react'

class RefDemo extends Component {

    constructor() {
        super();

        this.inputRef = React.createRef()

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()
        console.log(this.inputRef.current.value)
    }

    componentDidMount() {
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" ref={this.inputRef}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default RefDemo
