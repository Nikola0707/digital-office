import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { saveSessionIdReducer } from './loginStore'

const allReducers = combineReducers({
    saveSessionIdReducer
})

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store