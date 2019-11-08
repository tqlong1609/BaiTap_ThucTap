import {takeEvery, put, call} from 'redux-saga/effects';

function* loadDataUrl() {
  try {
    const res = yield call(fetch, 'https://api.myjson.com/bins/w5n0o');
    const json = yield call([res, 'json']);
    yield put({type: 'LoadDataAsync', value: json});
  } catch (error) {
      console.log(error);
  }
}

function* rootSaga() {
  yield takeEvery('loadData', loadDataUrl);
}

export default rootSaga;
