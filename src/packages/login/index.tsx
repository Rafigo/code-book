import React, { useContext } from 'react';
import Context from './LoginProvider';

const Login = (): React.ReactElement => {
  const { state, dispatch } = useContext(Context);
  return <div>Login Page</div>;
};

export default Login;
