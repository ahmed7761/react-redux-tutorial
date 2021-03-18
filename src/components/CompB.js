import React, { Component } from 'react'

class CompB extends Component {

    constructor() {
        super();

        this.state = {
            newValue: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            newValue: props.data * 5
        }
    }



    render() {
        return(
            <div>
                <h1>Component B</h1>
                <p>{this.state.newValue}</p>
            </div>
        )
    }
}

export default CompB
