import React, { useState, useEffect } from 'react';

const HookCounterThree = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('use effect')
        document.title = `count: ${count}`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h2>Name is {name}</h2>
            <h1>Value: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    );
};

export default HookCounterThree;
