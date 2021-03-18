import React, { Component } from 'react'

class Condition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isUser: true
        }
    }


    render() {
        if(this.state.isUser){
            return(
                <div>
                    <div>Hello User</div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>Hello Guest</div>
                </div>
            )
        }

    }
}

export default Condition
