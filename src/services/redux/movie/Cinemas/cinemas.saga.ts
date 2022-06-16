import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { REQUEST_CINEMAS, RECEIVE_CINEMAS } from "./cinemas.types";
import {GET} from '../../../api/MovieApi';

async function cinemasFetch() {
    const response = await GET('api/public/Cinemas');
    return response.data.data;
}

function* workCinemasFetch(): any {
    const cinemas = yield call(cinemasFetch);
    yield put({
        type: RECEIVE_CINEMAS,
        payload: cinemas
    })
}

function* cinemasSaga() {
    yield takeEvery(REQUEST_CINEMAS, workCinemasFetch)
}

export default cinemasSaga;