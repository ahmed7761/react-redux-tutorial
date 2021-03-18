import React, { Component } from 'react'

class ConditionTwo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isUser: false
        }
    }


    render() {
        let msg;
        if(this.state.isUser){
            msg = <div>Hello User</div>
        }
        else{
            msg = <div>Hello Guest</div>
        }

        return(
            <div>
                {msg}
            </div>
        )


    }
}

export default ConditionTwo
