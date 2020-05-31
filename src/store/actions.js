import * as TYPES from './types';

import NodepopAPI from  '../services/NodepopAPI';


export const fetchAdvertsRequest = () => ({
    type: TYPES.FETCH_ADVERTS_REQUEST
});

export const fetchAdvertsFailure = error => ({
    type: TYPES.FETCH_ADVERTS_FAILURE,
    error,
});

export const fetchAdvertsSuccess = adverts => ({
    type: TYPES.FETCH_ADVERTS_SUCCESS,
    adverts,
});

export const fetchAdverts = (apiUrl) => {
    return async function(dispatch, getState) {
        dispatch(fetchAdvertsRequest());
        try {
        
            const adverts = await NodepopAPI(apiUrl).getAdverts();
            dispatch(fetchAdvertsSuccess(adverts));
        } catch (error) {
            dispatch(fetchAdvertsFailure(error.message))
        }
    }
};

export const editAdvertRequest = () => ({
    type: TYPES.EDIT_ADVERT_REQUEST,
});

export const editAdvertFailure = error => ({
    type: TYPES.EDIT_ADVERT_FAILURE,
    error,
});

export const editAdvertSuccess = advert => ({
    type: TYPES.EDIT_ADVERT_SUCCESS,
    advert,
});

export const editAdvert = (advert, apiUrl, history) => {   
    return async function(dispatch, getState) {
        dispatch(editAdvertRequest());
        try {
            const response = await NodepopAPI(apiUrl).editAdvert(advert);
            console.log(response)
            history.push(`/advert/${response['_id']}`)
            dispatch(editAdvertSuccess(response));
        } catch (error) {
            dispatch(editAdvertFailure(error.message))
        }
    }
};

export const createAdvert = (advert, apiUrl, history) => {   
    return async function(dispatch, getState) {
        delete advert._id;
        dispatch(createAdvertRequest());
        try {
            const response = await NodepopAPI(apiUrl).postAdvert(advert);
            console.log(response)
            history.push(`/advert/${response['_id']}`)
            dispatch(createAdvertSuccess(response));
        } catch (error) {
            dispatch(createAdvertFailure(error.message));
        }
    }
};

export const editSession = session => ({
    type: TYPES.EDIT_SESSION,
    session,
});

export const setSession = session => ({
    type: TYPES.SET_SESSION,
    session,
});

export const logout = () => ({
    type: TYPES.LOGOUT,
});

const createAdvertRequest = advert => ({
    type: TYPES.CREATE_ADVERT_REQUEST,
    advert,
});

const createAdvertFailure = error => ({
    type: TYPES.CREATE_ADVERT_FAILURE,
    error,
});

export const createAdvertSuccess = advert => ({
    type: TYPES.CREATE_ADVERT_SUCCESS,
    advert,
});