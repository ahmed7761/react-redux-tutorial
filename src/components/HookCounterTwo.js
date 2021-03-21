import React, { useState } from 'react'

const HookCounterTwo = () => {
    const [count, setCount] = useState(0)

    const incrementTen = () => {
        for(let i = 0; i < 10; i++){
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <div>
            <h1>Value: {count}</h1>
            <button onClick={() => incrementTen()}>Increment</button>
        </div>
    )
}

export default HookCounterTwo
