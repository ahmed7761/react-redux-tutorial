import React, { Component } from 'react'


class ClickCounterTwo extends Component {

    render() {
        return(
            <div>
                <h4>Value: {this.props.count} </h4>
                <button onClick={this.props.increment} >Increment</button>
            </div>
        )
    }
}

export default ClickCounterTwo
