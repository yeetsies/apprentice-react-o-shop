import actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import { history } from '../../utils/history';

export const loginActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        console.log(user);
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        console.log(error);
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: actionTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: actionTypes.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}
