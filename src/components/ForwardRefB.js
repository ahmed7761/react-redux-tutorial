import React from  'react'

const ForwardRefB = React.forwardRef((props, ref) => {
    return(
        <div>
            <input ref={ref} type="text"/>
        </div>
    )
})
export default ForwardRefB
