import React, { Component } from 'react'


class UnmountB extends Component {

    componentWillUnmount() {
        console.log("good bye")
    }

    render() {
        return(
            <div>
                <h3>Child </h3>
            </div>
        )
    }
}

export default UnmountB
