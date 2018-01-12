import * as types from './constants';

const initialState = { user: {} };

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.EMAIL_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

export default mainReducer;
