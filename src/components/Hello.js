import React from 'react'

function Hello(props) {
    return (
        <div>
            <h1>Hello World { props.name }</h1>
            <h3>{ props.children }</h3>
        </div>
    )
}

export default Hello;
