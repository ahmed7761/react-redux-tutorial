import React from  'react'

const Child = (props) => {
    return(
        <div>
            <button onClick={()=> props.grettingMethod("Child")}> Gretting </button>
        </div>
    )
}
export default Child
