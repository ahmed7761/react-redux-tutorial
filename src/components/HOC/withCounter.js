import React from 'react'

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }

            this.increment = this.increment.bind(this)
        }

        increment() {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }))
        }


        render() {
            return <OriginalComponent count={this.state.count} increment={ this.increment } {...this.props} />
        }
    }
    return NewComponent
}

export default withCounter
