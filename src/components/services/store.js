import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

const initialState = {}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools( applyMiddleware(logger))

)
