import {useState} from 'react'
function useCounter(val) {
    const [value, setValue] = useState(val)

    const increment = () => {
        setValue(prevState => prevState + 1)
    }

    const decrement = () => {
        setValue(prevState => prevState - 1)
    }
    return [value, increment, decrement]
}

export default useCounter
