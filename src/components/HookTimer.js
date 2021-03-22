import React, { useEffect, useState, useRef } from 'react';

const HookTimer = () => {

    const [timer, setTimer] = useState(0)

    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <div>
            <h4>Hook Timer: {timer}</h4>
            <button onClick={() => clearInterval(intervalRef.current)}>Pause Timer</button>
        </div>
    );
};

export default HookTimer;
