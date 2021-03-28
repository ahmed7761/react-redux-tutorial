import { people_request, get_people_success, get_people_failed } from '../types'
import axios from "axios";

// Fetch data using async, await

export const peopleList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: people_request
            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data)
            dispatch({
                type: get_people_success,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: get_people_failed,
                payload: error.message
            })

        }
    }
}

// fetch data using then catch

// export const peopleList = () => {
//     return (dispatch) => {
//         dispatch({
//             type: people_request
//         })
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 dispatch({
//                     type: get_people_success,
//                     payload: res.data
//              })
//         })
//             .catch(error => {
//                 dispatch({
//                     type: get_people_failed,
//                     payload: error.message
//            })
//             })
//     }
// }
