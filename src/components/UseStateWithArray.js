import React, { useState } from 'react';

const UseStateWithArray = () => {

    const  [lists, setlists] = useState([])

    const generatedList = () => {
        setlists([...lists, {
            id: lists.length,
            value: Math.random()
        }])
    }

    return (
        <div>
            <button onClick={generatedList}>Generate List</button>
            <ul>
                {
                    lists.map(list => {
                       return <li key={list.id}>{list.value}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default UseStateWithArray;
