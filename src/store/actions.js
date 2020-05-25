//API
import NodepopAPI from  '../services/NodepopAPI';
// Actions
import * as TYPES from './types';

export const fetchAdverts = () => {
    return async function(dispatch, getState) {
        dispatch(fetchAdvertsRequest());
        try {
            const adverts = await NodepopAPI.getAdverts();
            dispatch(fetchAdvertsSuccess(adverts));
        } catch (error) {
            dispatch(fetchAdvertsFailure(error.message))
        }
    }
};

export const editAdvert = (advert) => {   
    return async function(dispatch, getState) {
        dispatch(editAdvertRequest());
        try {
            const response = await NodepopAPI.editAdvert(advert);
            dispatch(editAdvertSuccess(response));
        } catch (error) {
            dispatch(editAdvertFailure(error.message))
        }
    }
};

export const createAdvert = (advert) => {   
    return async function(dispatch, getState) {
        delete advert._id;
        dispatch(createAdvertRequest());
        try {
            const response = await NodepopAPI.postAdvert(advert);
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

const fetchAdvertsRequest = () => ({
    type: TYPES.FETCH_ADVERTS_REQUEST
});

const fetchAdvertsFailure = error => ({
    type: TYPES.FETCH_ADVERTS_FAILURE,
    error,
});

const fetchAdvertsSuccess = adverts => ({
    type: TYPES.FETCH_ADVERTS_SUCCESS,
    adverts,
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

const editAdvertRequest = () => ({
    type: TYPES.EDIT_ADVERT_REQUEST,
});

const editAdvertFailure = error => ({
    type: TYPES.EDIT_ADVERT_FAILURE,
    error,
});

const editAdvertSuccess = advert => ({
    type: TYPES.EDIT_ADVERT_SUCCESS,
    advert,
});