import React, { useState, useEffect } from 'react';

const MouseMove = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const LogMouseMove = (e) => {
        console.log('Log Mouse Move')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Use effect move')
        window.addEventListener('mousemove', LogMouseMove)
    },[])

    return (
        <div>
            <h3>X - {x} and Y - {y}</h3>
        </div>
    );
};

export default MouseMove;
