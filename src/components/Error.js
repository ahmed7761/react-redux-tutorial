import React, { Component } from 'react'

class Error extends Component{

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }

    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h1>Something went wrong</h1> : this.props.children }
            </div>
        )
    }
}

export default Error
