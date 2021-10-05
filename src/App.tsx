import React from 'react';
import Grid from '@mui/material/Grid';
import AppMenu from './packages/appmenu';
import Appbar from './packages/appbar';
import Breadcrumb from './packages/breadcrumbs';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Appbar />
      <Grid container>
        <Grid item xs={2}>
          <AppMenu />
        </Grid>
        <Grid item xs={10} sx={{ padding: '16px' }}>
          <Breadcrumb />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
