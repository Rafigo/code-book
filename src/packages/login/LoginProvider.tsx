import * as React from 'react';
import axios from 'axios';
import LoginReducer, {
  endSuccessAuthentication,
  endFailAuthentication,
} from './LoginReducer';
import { ContextType, LoginProviderProps, initialState } from './utils';

const LoginContext = React.createContext<ContextType | undefined>(undefined);

const LoginProvider = ({
  children,
}: LoginProviderProps): React.ReactElement => {
  const [state, dispatch] = React.useReducer(LoginReducer, initialState);
  const value = { state, dispatch };

  React.useEffect(() => {
    if (state.isAuthenticating) {
      const fetchData = async () => {
        try {
          const result = await axios(
            'http://hn.algolia.com/api/v1/search?qery=france',
          );
          console.log('result', result.data);
          dispatch(endSuccessAuthentication());
        } catch (error) {
          dispatch(endFailAuthentication());
        }
      };

      fetchData();
    }
  }, [state.isAuthenticating]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

const useLogin = (): ContextType => {
  const context = React.useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};

export { LoginProvider, useLogin };
