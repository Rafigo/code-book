import * as React from 'react';
import Grid from '@mui/material/Grid';

import Login from './packages/login';
import { LoginProvider } from './packages/login/LoginProvider';
import Appbar from './packages/appbar';

const App = (): React.ReactElement => (
  <div className="App">
    <Appbar />
    <Grid container spacing={2} sx={{ padding: '16px' }}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LoginProvider>
          <Login />
        </LoginProvider>
      </Grid>
    </Grid>
  </div>
);

export default App;
