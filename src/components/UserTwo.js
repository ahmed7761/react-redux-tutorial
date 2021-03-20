import React, { Component } from 'react'


class UserTwo extends Component{

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return(
            <div>
                <h3>{ this.props.render(this.state.count, this.increment) }</h3>
            </div>
        )
    }
}

export default UserTwo
