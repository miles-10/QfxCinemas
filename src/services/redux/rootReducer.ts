import { combineReducers } from 'redux';
import nowShowingReducer from './movie/NowShowing/showing.reducers';
import commingSoonReducer from './movie/CommingSoon/comming.reducers';
import cinemasReducer from './movie/Cinemas/cinemas.reducers';
export default combineReducers({
    showing: nowShowingReducer,
    soon: commingSoonReducer,
    cinema: cinemasReducer
})