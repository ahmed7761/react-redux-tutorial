import React, { useReducer } from 'react';

const initialState = {
    value: 0,
    value2: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                value: state.value + action.value
            }

        case 'decrement':
            return {
                ...state,
                value: state.value - action.value
            }

        case 'increment2':
            return {
                ...state,
                value2: state.value2 + action.value
            }

        case 'reset':
            return initialState

        default:
            return state
    }
}

const ReducerCounterTwo = () => {

    const [ count, dispatch ]  = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count: {count.value} </p>
            <p>Count 2: {count.value2} </p>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment by 5 count 2 </button>
        </div>
    );
};

export default ReducerCounterTwo;
