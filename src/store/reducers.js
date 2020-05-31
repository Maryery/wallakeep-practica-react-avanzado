import * as TYPES from './types';
import Session from '../models/Session';
import LocalStorage from '../utils/Storage';

export const initialState = {
    session: LocalStorage.readLocalStorage() || new Session(),
    adverts: [],
}

export function session (state = initialState.session, action) {
    switch (action.type) {
        case TYPES.SET_SESSION:
            return {...action.session};
        case TYPES.EDIT_SESSION:
            return {...action.session};
        case TYPES.LOGOUT:
            return { ...initialState.session};
        default:
            return state;
    }
}

export function adverts (state = initialState.adverts, action) {
    switch (action.type) {
        case TYPES.FETCH_ADVERTS_REQUEST:
            return initialState.adverts;
        case TYPES.FETCH_ADVERTS_FAILURE:
            return initialState.adverts;
        case TYPES.FETCH_ADVERTS_SUCCESS:
            return action.adverts;
        case TYPES.EDIT_ADVERT_SUCCESS:
            return state.map(advert => {
                if (advert._id === action.advert._id) {
                    return { ...action.advert }
                }
                return advert;
            });
        case TYPES.CREATE_ADVERT_SUCCESS:
            return state.concat(action.advert);
        default:
            return state;
    }
}