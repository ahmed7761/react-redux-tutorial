import React, { Component } from 'react'
import CompB from "./CompB";


class CompA extends Component {

    constructor() {
        super();

        this.state = {
            value: 0
        }
        this.increment = this.increment.bind(this)
    }

    static getDerivedStateFromProps() {

    }

    increment() {
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        return(
            <div>
                <h1>Component A </h1>
                <p>Value: {this.state.value}</p>
                <button onClick={this.increment}>Increment</button>
                <CompB data={this.state.value} />
            </div>
        )
    }
}

export default CompA
