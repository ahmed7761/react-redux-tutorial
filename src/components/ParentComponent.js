import React, { useState, useCallback } from 'react';
import Button from "./Button";

const ParentComponent = () => {

    const [id, setId] = useState(0)
    const [count, setCount] = useState(0)

    const incrementId = useCallback( () => {
        setId(id + 1)
    }, [id])

    const incrementCount = useCallback(() => {
        setCount(count + 1)
    },[count])

    return (
        <div>
            <p>Id: {id}</p>
            <p>Count: {count}</p>
            <Button text="Id" increment={incrementId} />
            <Button text="Count" increment={incrementCount} />
        </div>
    );
};

export default ParentComponent;
