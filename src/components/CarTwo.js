import React, { Component } from 'react'

class CarTwo extends Component {

    constructor(props) {
        super();

        this.state ={
            message: "Hello"
        }
    }

    render() {
        const { brand, color } =this.props
        const { message } =this.state

        return(
            <div>
                <h1>Brand: {brand}, Color: {color}</h1>
                <p>{ message }</p>
            </div>
        )
    }
}
export default CarTwo
