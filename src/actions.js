import * as types from './constants';

export const emailLoginAction = (email, pass) => ({ type: types.EMAIL_LOGIN_REQUEST, email, pass });

export const getUserDetailsAction = (userId) => ({ type: types.USER_DETAILS_REQUEST, userId });
