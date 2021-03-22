import React, { useState } from 'react';
import MouseMove from "./MouseMove";

const MouseContainer = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <button onClick={() => setShow(!show)}> Toggle Show </button>
            {show && <MouseMove /> }
        </div>
    );
};

export default MouseContainer;
