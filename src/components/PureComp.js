import React, { PureComponent } from 'react'

class PureComp extends PureComponent{

    constructor() {
        super();

        this.state = {
            id: 5
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                id:5
            })
        }, 2000)
    }

    render() {
        console.log('Rendered')
        return(
            <div>
                <h5>Id: { this.state.id }</h5>
            </div>
        )
    }

}

export default PureComp
