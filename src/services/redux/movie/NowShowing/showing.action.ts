import {REQUEST_NOWSHOWING, RECEIVE_NOWSHOWING, RECEIVE_NOWSHOWING_SUCCESS} from './showing.types';

export const requestNowShowing = () => ({
    type: REQUEST_NOWSHOWING
});

export const responseNowShowing = (payload: any) => ({
    type: RECEIVE_NOWSHOWING,
    payload
});

export const receiveNowShowingSuccess = (payload: any) => ({
    type: RECEIVE_NOWSHOWING_SUCCESS,   
    payload
});