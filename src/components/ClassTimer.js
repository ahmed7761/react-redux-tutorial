import React, { Component } from 'react'

class ClassTimer extends Component {

    interval

    constructor() {
        super();

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        return (
            <div>
                <h4>Timer: {this.state.timer}</h4>
                <button onClick={() => clearInterval(this.interval)}>Pause Timer</button>
            </div>
        );
    }
}

export default ClassTimer
