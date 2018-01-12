import { call, put, takeEvery } from 'redux-saga/effects';

import * as types from './constants';

import { emailLogin } from './api';

function* emailLoginSaga(action) {
  try {
    const { email, pass } = action;
    const user = yield call(emailLogin, email, pass);
    // console.log('emailLoginSaga', { email, pass, user });
    if (user && user.hasOwnProperty('id')) {
      yield put({ type: types.EMAIL_LOGIN_SUCCESS, user });
    } else {
      yield put({ type: types.EMAIL_LOGIN_FAILURE });
    }
  } catch (e) {
    console.log('emailLoginSaga error', e.message);
  }
}

function* mainSaga() {
  yield [
    takeEvery(types.EMAIL_LOGIN_REQUEST, emailLoginSaga)
  ];
}

export default mainSaga;
