import React, { Component } from 'react'
import CompTwo from "./CompTwo";


class CompThree extends Component {

    render() {
        return(
            <div>
                <h3>Component 3  {this.props.name}</h3>
            </div>
        )
    }
}

export default CompThree
