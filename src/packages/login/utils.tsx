export const START_AUTH = 'START_AUTH';
export const END_SUCCESS_AUTH = 'END_SUCCESS_AUTH';
export const END_FAIL_AUTH = 'END_FAIL_AUTH';

// Login context state type
export type StateType = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  error: string;
  login: string;
  password: string;
};

// Login context type
export type ContextType = {
  state: StateType;
  dispatch: Dispatch;
};

// Login context initial state
export const initialState: StateType = {
  isAuthenticated: false,
  isAuthenticating: false,
  error: '',
  login: '',
  password: '',
};

// Allowed actions by the login reducer
export type Action =
  | { type: typeof START_AUTH; payload: { login: string; password: string } }
  | { type: typeof END_SUCCESS_AUTH }
  | { type: typeof END_FAIL_AUTH };

// COntext dispatch action type
// eslint-disable-next-line no-unused-vars
export type Dispatch = (action: Action) => void;

// Login provider type
export type LoginProviderProps = { children: React.ReactNode };

// Login form type
export type LoginFormType = {
  login: string;
  password: string;
};
