import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

import { StateType, LoginFormType } from './utils';

type LoginViewType = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  error: string;
  authenticate: ({ login, password }: LoginFormType) => void;
};

const LoginView = ({
  authenticate,
  isAuthenticated,
  isAuthenticating,
  error,
}: LoginViewType): React.ReactElement => {
  const [credentials, setCredentials] = React.useState({
    login: '',
    password: '',
  });
  const { login, password } = credentials;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAuthenticating) {
      setCredentials({
        ...credentials,
        [event.target.name]: event.target.value,
      });
    }
  };

  const startAuthenticate = () => {
    if (!isAuthenticating) {
      authenticate({ login, password });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex start',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        width: '250px',
        height: '200px',
      }}
    >
      <TextField
        onChange={handleChange}
        label="Login"
        variant="outlined"
        size="small"
        value={login}
        name="login"
        disabled={isAuthenticating}
        sx={{ marginBottom: '8px' }}
      />
      <TextField
        onChange={handleChange}
        label="Password"
        variant="outlined"
        size="small"
        value={password}
        name="password"
        type="password"
        disabled={isAuthenticating}
        sx={{ marginBottom: '8px' }}
      />
      <Divider />
      <LoadingButton
        variant="contained"
        onClick={startAuthenticate}
        loading={isAuthenticating}
        disabled={isAuthenticating}
        sx={{ marginBottom: '8px' }}
      >
        LOGIN
      </LoadingButton>
      {error && (
        <>
          <Divider />
          <Alert severity="error">{error}</Alert>
        </>
      )}
    </Box>
  );
};

export default LoginView;
