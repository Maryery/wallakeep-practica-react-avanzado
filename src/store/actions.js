import * as TYPES from './types';

export const setSession = session => ({
    type: TYPES.SET_SESSION,
    session,
});

export const FetchAdvertsRequest = () => ({
    type: TYPES.FETCH_ADVERTS_REQUEST
});

export const FetchAdvertsFailure = error => ({
    type: TYPES.FETCH_ADVERTS_FAILURE,
    error,
});

export const FetchAdvertsSuccess = adverts => ({
    type: TYPES.FETCH_ADVERTS_SUCCESS,
    adverts,
});

export const createAdvertRequest = advert => ({
    type: TYPES.CREATE_ADVERT_REQUEST,
    advert,
});

export const createAdvertFailure = error => ({
    type: TYPES.CREATE_ADVERT_FAILURE,
    error,
});

export const createAdvertSuccess = advert => ({
    type: TYPES.CREATE_ADVERT_SUCCESS,
    advert,
});

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