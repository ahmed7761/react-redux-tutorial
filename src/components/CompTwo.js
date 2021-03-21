import React, { Component } from 'react'
import CompThree from "./CompThree";


class CompTwo extends Component {

    render() {
        return(
            <div>
                <CompThree  name={this.props.name} />
            </div>
        )
    }
}

export default CompTwo
