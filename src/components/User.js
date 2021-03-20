import React, { Component } from 'react'


class User extends Component{

    constructor() {
        super();

        this.state = {
            value: 0
        }
    }

    render() {
        return(
            <div>
                <h3>{ this.props.render(false, this.state.value) }</h3>
            </div>
        )
    }
}

export default User
