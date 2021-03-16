import React from 'react';

// Method 1

// const CarOne = ({ brand, color}) => {
//     return (
//         <div>
//             <h1>Brand: {brand}, Color: {color}</h1>
//         </div>
//     )
// }

// Method 2

const CarOne = (props) => {
    const { brand, color } = props
    return (
        <div>
            <h1>Brand: {brand}, Color: {color}</h1>
        </div>
    )
}

export default CarOne
