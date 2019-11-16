import {takeEvery, put, call} from 'redux-saga/effects';
import {url} from '../src/urlJson';
function* loadDataUrl() {
  try {
    const res = yield call(fetch, url);
    const json = yield call([res, 'json']);
    yield put({type: 'loadDataUrlSync', value: json});
  } catch (error) {
    console.log(error);
  }
}

function* root() {
  yield takeEvery('loadData', loadDataUrl);
}

export default root;
