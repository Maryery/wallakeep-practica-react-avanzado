import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'

import { session, adverts }  from './reducers';


const reducer = combineReducers({
    session,
    adverts,
})

export function configureStore(preloadedState) {
    const store = createStore(reducer, applyMiddleware(thunkMiddleware), preloadedState, composeWithDevTools())
    return store    
}