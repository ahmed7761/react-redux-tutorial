import React, { useContext } from 'react';
import {ProfileContext, UserContext} from "../App";

const ComponentD = () => {

    const username = useContext(UserContext)
    const profession = useContext(ProfileContext)

    return (
        <div>
            <h1>Component D</h1>
            <h3>Name is {username} and profession is {profession}</h3>
        </div>
    );
};

export default ComponentD;
