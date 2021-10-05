import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Appbar = (): React.ReactElement => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Memo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
