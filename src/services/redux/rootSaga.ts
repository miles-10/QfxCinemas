
import {all} from 'redux-saga/effects';
import mySaga from './movie/NowShowing/showing.saga';
import soonSaga from './movie/CommingSoon/comming.saga';
import cinemasSaga from './movie/Cinemas/cinemas.saga';

function* rootSaga() {
    yield all([mySaga(), soonSaga(), cinemasSaga()]);
}

export default rootSaga;