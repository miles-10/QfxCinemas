import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { REQUEST_COMMINGSOON, RECEIVE_COMMINGSOON } from './comming.types';
import {GET} from '../../../api/MovieApi';

async function comingFetch () {
    const response = await GET('api/public/ComingSoon');
    return response.data.data;
}


function* workcomingFetch(): any {
    const commingSoon = yield call(comingFetch);
    yield put({
        type: RECEIVE_COMMINGSOON,
        payload: commingSoon
    })
}


function* soonSaga() {
    yield takeEvery(REQUEST_COMMINGSOON, workcomingFetch);
}

export default soonSaga;