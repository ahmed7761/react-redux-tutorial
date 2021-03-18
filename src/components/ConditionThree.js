import React, { Component } from 'react'

class ConditionThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isUser: true
        }
    }


    render() {
    // Ternary operator
        //return this.state.isUser ? <div>Hello User</div> : <div>Hello Guest</div>
    // Short circuit operator
        return this.state.isUser && <div>Hello User</div>

    }
}

export default ConditionThree
