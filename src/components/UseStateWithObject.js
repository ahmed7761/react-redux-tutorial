import React, { useState } from 'react';

const UseStateWithObject = () => {

    const [info, setInfo] = useState({
        name: '',
        id: ''
    })

    return (
        <div>
            <form>
                <input value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value})}/>
                <input value={info.id} onChange={(e) => setInfo({...info, id: e.target.value})}/>
            </form>
            <p>Name: {info.name}</p>
            <p>Id: {info.id}</p>
        </div>
    );
};

export default UseStateWithObject;
