import React, { Component } from 'react'
import withCounter from "./HOC/withCounter";

class ClickCounter extends Component{


    render() {
        return(
            <div>
                <h3>Count: { this.props.count } {this.props.name}</h3>
                <button onClick={() => this.props.increment() }>Increment</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
