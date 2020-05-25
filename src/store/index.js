import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import {session, adverts}  from './reducers';


const reducer = combineReducers({
    session,
    adverts,
});

export const store = createStore(reducer, composeWithDevTools());

