import { combineReducers } from 'redux';
import movieReducer from './movie/NowShowing/showing.reducers';
import commingSoonReducer from './movie/CommingSoon/comming.reducers';
import cinemasReducer from './movie/Cinemas/cinemas.reducers';
export default combineReducers({
    nowshowing: movieReducer,
    commingSoon: commingSoonReducer,
    cinemas: cinemasReducer
})