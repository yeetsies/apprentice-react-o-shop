import actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import { history } from '../../utils/history';

export const registerActions = {
  register,
};

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push('/login');
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: actionTypes.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: actionTypes.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: actionTypes.REGISTER_FAILURE, error };
  }
}
