import React from 'react';
import ComponentD from "./ComponentD";
import { UserContext, ProfileContext } from "../App";

const ComponentC = () => {
    return (
        <div>
            <ComponentD />
            <UserContext.Consumer>
                {
                    username => {
                      return  <ProfileContext.Consumer>
                            {
                                profession => {
                                    return (
                                        <div>
                                            <h2>Name is {username}</h2>
                                            <h2>Profession is {profession}</h2>
                                        </div>
                                    )
                                }
                            }

                        </ProfileContext.Consumer>
                    }
                }
            </UserContext.Consumer>
        </div>
    );
};

export default ComponentC;
