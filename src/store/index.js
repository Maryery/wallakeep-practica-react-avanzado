import { createStore, combineReducers } from 'redux';
import { session, adverts } from './reducers';

const reducer = combineReducers({
    session,
    adverts,
});

