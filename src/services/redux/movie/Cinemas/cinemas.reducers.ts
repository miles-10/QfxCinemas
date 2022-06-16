import { REQUEST_CINEMAS, RECEIVE_CINEMAS, RECEIVE_CINEMAS_SUCCESS } from "./cinemas.types";

export const initialState = {
    loading: false,
    cinemas: [],
}

const cinemasReducer = (state = initialState, action: {type: any, payload: any}) => {
    switch (action.type) {
        case REQUEST_CINEMAS:
            return {...state, loading: true};
        case RECEIVE_CINEMAS: 
            return {...state, cinemas: action.payload};
        case RECEIVE_CINEMAS_SUCCESS:
            return {...state, loading: false};
        default: 
            return state;
    }
}

export default cinemasReducer;