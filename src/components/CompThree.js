import React, { Component } from 'react'
import CompTwo from "./CompTwo";
import { UserConsumer } from "./UserContext";

class CompThree extends Component {

    render() {
        return(
            <UserConsumer>
                { (value) => {
                    return <div>
                        <h1>Hello, {value} from comp 3</h1>
                    </div>
                }}
            </UserConsumer>
        )
    }
}

export default CompThree
