import { call, put, takeEvery } from 'redux-saga/effects';

import * as types from './constants';

import { emailLogin, userDetails } from './api';

function* emailLoginSaga(action) {
  try {
    const user = yield call(emailLogin, action.email, action.pass);
    if (user && user.hasOwnProperty('id')) {
      yield put({ type: types.EMAIL_LOGIN_SUCCESS, user });
    } else {
      yield put({ type: types.EMAIL_LOGIN_FAILURE });
    }
  } catch (e) {
    console.log('emailLoginSaga error', e.message);
  }
}

function* userDetailsSaga(action) {
  try {
    const details = yield call(userDetails, action.userId);
    if (details && details.hasOwnProperty('user_id')) {
      yield put({ type: types.USER_DETAILS_SUCCESS, details });
    } else {
      yield put({ type: types.USER_DETAILS_FAILURE });
    }
  } catch (e) {
    console.log('emailLoginSaga error', e.message);
  }
}

function* mainSaga() {
  yield [
    takeEvery(types.EMAIL_LOGIN_REQUEST, emailLoginSaga),
    takeEvery(types.USER_DETAILS_REQUEST, userDetailsSaga)
  ];
}

export default mainSaga;
