import {combineReducers} from 'redux'
import counterReducer from './CounterReducer'
import peopleReducer from  './peopleReducer'

export default combineReducers({
    counterReducer,
    peopleReducer
})
