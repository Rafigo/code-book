interface MyState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: string;
}

type Action = { type: string };

export const isLoging = () => ({
  type: 'isLoging',
});

export const reducer = (state: MyState, action: Action): MyState => {
  switch (action.type) {
    case 'isLoging':
      return { ...state };

    default:
      return { ...state };
  }
};
