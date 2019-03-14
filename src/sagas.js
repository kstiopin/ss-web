import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as types from './constants';
import { emailLogin, userDetails, userDetailsUpdate } from './api';

function* emailLoginSaga(action) {
  try {
    const { email, pass } = action;
    const user = yield call(emailLogin, email, pass);
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
    console.log('userDetailsSaga error', e.message);
  }
}

function* userDetailsUpdateSaga(action) {
  try {
    const { details } = action;
    const resp = yield call(userDetailsUpdate, details);
    if (resp) {
      yield put({ type: types.USER_DETAILS_UPDATE_SUCCESS, details });
    } else {
      yield put({ type: types.USER_DETAILS_UPDATE_FAILURE });
    }
  } catch (e) {
    console.log('userDetailsUpdateSaga error', e.message);
  }
}

function* mainSaga() {
  yield all([
    takeEvery(types.EMAIL_LOGIN_REQUEST, emailLoginSaga),
    takeEvery(types.USER_DETAILS_REQUEST, userDetailsSaga),
    takeEvery(types.USER_DETAILS_UPDATE_REQUEST, userDetailsUpdateSaga)
  ]);
}

export default mainSaga;
