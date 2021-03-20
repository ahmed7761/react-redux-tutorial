import React from 'react'

const MemoB = ({ id }) => {
    console.log("Memo B rendered")
    return (
        <div>
            <h1>Id: { id }</h1>
        </div>
    )
}

export default React.memo(MemoB)
