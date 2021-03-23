import React, {useState} from 'react';

import useCounter from "../Hooks/useCounter";

const CustomHookA = () => {

    const [value, increment, decrement] = useCounter(5)

    return (
        <div>
            <h3>Comp A</h3>
            <h5>Value: {value}</h5>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CustomHookA;
