import React, { Component } from 'react'



class Update extends Component {

    constructor() {
        super();

        this.state = {
            value: 0
        }
      //  this.increment = this.increment.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextState === this.state.value){
            return false;
        }
        else {
            return true
        }
    }

    // componentDidMount() {
    //     setInterval(() =>{
    //         this.setState({
    //             value: this.setState.value + 1
    //         })
    //     }, 2000)
    // }


    render() {
        console.log('rendered')
        return(
            <div>
                <h1>Update Component </h1>
                <p>Value: {this.state.value}</p>
            </div>
        )
    }
}

export default Update
