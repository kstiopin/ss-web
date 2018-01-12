import * as types from './constants';

const user = (localStorage.getItem('user') === null) ? {} : JSON.parse(localStorage.getItem('user'));
const initialState = { user };

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.EMAIL_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.user));
      return { ...state, user: action.user };
    default:
      return state;
  }
}

export default mainReducer;
