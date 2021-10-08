import * as React from 'react';
import LoginView from './LoginView';

import { useLogin } from './LoginProvider';
import { startAuthentication } from './LoginReducer';
import { LoginFormType } from './utils';

const Login = (): React.ReactElement => {
  const { state, dispatch } = useLogin();
  const { isAuthenticated, isAuthenticating, error } = state;

  const authenticate = ({ login, password }: LoginFormType): void => {
    console.log('click on start', login, password);
    dispatch(startAuthentication({ login, password }));
  };

  return (
    <LoginView
      authenticate={authenticate}
      isAuthenticated={isAuthenticated}
      isAuthenticating={isAuthenticating}
      error={error}
    />
  );
};

export default Login;
