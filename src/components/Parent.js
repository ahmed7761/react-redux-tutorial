import React, { Component } from 'react'
import Child from "./Child";

class Parent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "User"
        }

        this.gretting = this.gretting.bind(this)
    }

    gretting(data){
        // alert('Hello ' + this.state.message)
        alert(`Hello  ${this.state.message} from ${data} component`)
    }


    render() {
        return(
            <div>
                <Child grettingMethod={this.gretting} />
            </div>
        )
    }
}

export default Parent
