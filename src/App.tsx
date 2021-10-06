import React, { useState } from 'react';
import Login from './packages/login';

const App = (): React.ReactElement => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login />;
  }

  return <div className="App">Connected</div>;
};

export default App;
