import {
  START_AUTH,
  END_FAIL_AUTH,
  END_SUCCESS_AUTH,
  Action,
  StateType,
  LoginFormType,
} from './utils';

export const startAuthentication = ({
  login,
  password,
}: LoginFormType): Action => {
  console.log('reducer', login, password);
  return { type: START_AUTH, payload: { login, password } };
};

export const endSuccessAuthentication = (): Action => {
  return { type: END_SUCCESS_AUTH };
};

export const endFailAuthentication = (): Action => {
  return { type: END_FAIL_AUTH };
};

/**
 * Login reducer: render the current state context when user is authenticating
 * @param state
 * @param action
 * @returns the state => see ./utils.tsx => type State
 */
const LoginReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case START_AUTH:
      console.log(
        'start auth action',
        action.payload.login,
        action.payload.password,
      );
      return {
        ...state,
        isAuthenticating: true,
        login: action.payload.login,
        password: action.payload.password,
      };
    case END_SUCCESS_AUTH:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        login: '',
        password: '',
      };
    case END_FAIL_AUTH:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        error: 'Authentication Failed',
      };
    default:
      throw new Error();
  }
};

export default LoginReducer;
