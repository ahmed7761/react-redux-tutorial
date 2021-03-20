import React from  'react'
import ReactDOM from  'react-dom'

const PortalsDemo = () => {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal</h1>
        </div>,
        document.getElementById("portal-root")
    )
}
export default PortalsDemo
