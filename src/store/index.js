import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'

//import thunkMiddleware from 'redux-thunk'
import { session, adverts }  from './reducers';

const reducer = combineReducers({
    session,
    adverts,
})

const middleware = [ReduxThunk];
const composeEnhancers = composeWithDevTools;

export function configureStore(preloadedState) {
    const store = createStore(
        reducer, 
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    return store;   
}