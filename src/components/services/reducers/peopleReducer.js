import { people_request, get_people_success, get_people_failed } from '../types'

const initialState = {
    loading: false,
    people: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case people_request:
            return{
                ...state,
                loading: true
            }
        case get_people_success:
            return{
                ...state,
                loading: false,
                people: action.payload
            }
        case get_people_failed:
            return{
                ...state,
                loading: false,
                people: [],
                error: action.payload
            }

        default:
            return state
    }
}
