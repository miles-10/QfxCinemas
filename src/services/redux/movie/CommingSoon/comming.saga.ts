import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { REQUEST_COMMINGSOON, RECEIVE_COMMINGSOON } from './comming.types';
import {GET} from '../../../api/MovieApi';

async function comingFetch () {
    const response = await GET('api/public/ComingSoon');
    console.log('sagasoon', response);
    return response.data.data;
}

function* workcomingFetch(): any {
    const comingSoon = yield call(comingFetch);
    yield put({
        type: REQUEST_COMMINGSOON,
        payload: comingSoon
    })
}

function* soonSaga() {
    yield takeEvery(RECEIVE_COMMINGSOON, workcomingFetch);
}

export default soonSaga;