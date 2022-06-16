import {REQUEST_COMMINGSOON, RECEIVE_COMMINGSOON, RECEIVE_COMMINGSOON_SUCCESS } from './comming.types';

const initialState = {
    loading: false,
    commingSoon: [],
}

const commingSoonReducer = (state = initialState, action: {type: any, payload: any}) => {
    switch (action.type) {
        case REQUEST_COMMINGSOON:
            return {...state, loading: true};
        case RECEIVE_COMMINGSOON:
            return {...state, commingSoon: action.payload};
           
        case RECEIVE_COMMINGSOON_SUCCESS:
            return {...state, loading: false};
        default: 
            return state;
    }
}

export default commingSoonReducer;