import React, { Component } from 'react'
import ForwardRefB from "./ForwardRefB";

class ForwardRefA extends Component {

    constructor() {
        super();

        this.inputRef = React.createRef()

        this.focusInput = this.focusInput.bind(this)
    }

    focusInput() {
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                <ForwardRefB ref={this.inputRef}/>
                <button onClick={this.focusInput}>Focus</button>
            </div>
        )
    }

}

export default ForwardRefA
