import React, { useReducer } from 'react';
import { reducer, isLoging } from './LoginReducer';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  isError: '',
};

export const Context = React.createContext({});

interface ProviderProps {
  children: React.ReactElement;
}

const LoginProvider = ({ children }: ProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authenticate = (login: string, password: string) => {
    // Start authenticate
    dispatch(isLoging());
  };

  return (
    <Context.Provider value={{ state, dispatch, authenticate }}>
      {children}
    </Context.Provider>
  );
};

export default LoginProvider;
