import {
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING,
  RECEIVE_NOWSHOWING_SUCCESS,
} from './showing.types';

export const initialState = {
  loading: false,
  nowShowing: [],
};

const nowShowingReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_NOWSHOWING:
      return {...state, loading: true};
    case RECEIVE_NOWSHOWING:
      return {...state, nowShowing: action.payload};
    case RECEIVE_NOWSHOWING_SUCCESS:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default nowShowingReducer;
