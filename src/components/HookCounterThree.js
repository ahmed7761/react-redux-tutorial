import React, { useState, useEffect } from 'react';

const HookCounterThree = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `count: ${count}`
    })

    return (
        <div>
            <h1>Value: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    );
};

export default HookCounterThree;
