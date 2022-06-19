import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING,
} from '../NowShowing/showing.types';
import {GET} from '../../../api/MovieApi';

async function showingFetch() {
  const response = await GET('api/public/NowShowing');
  return response.data.data;
}

function* workMovieFetch(): any {
  const nowShowing = yield call(showingFetch);
  yield put({
    type: RECEIVE_NOWSHOWING,
    payload: nowShowing,
  });
}

function* mySaga() {
  yield takeEvery(REQUEST_NOWSHOWING, workMovieFetch);
}

export default mySaga;
