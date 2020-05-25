import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import {session, adverts}  from './reducers';


const reducer = combineReducers({
    session,
    adverts,
});

export function configureStore(preloadedState) {
    const store = createStore(reducer, preloadedState, composeWithDevTools())
    return store    
};


