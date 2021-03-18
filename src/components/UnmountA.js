import React, { Component } from 'react'
import UnmountB from "./UnmountB";


class UnmountA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }


    render() {
        return(
            <div>
                <h1>Unmount Component </h1>
                <h3>Parent</h3>
                { this.state.isOpen && <UnmountB />}
                <button onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>Click me</button>
            </div>
        )
    }
}

export default UnmountA
