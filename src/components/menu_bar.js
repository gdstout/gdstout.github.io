import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const MenuBar = () => {
  let content = (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">GRIFFIN D. STOUT</Typography>
      </Toolbar>
    </AppBar>
  );
  return content;
};

export default MenuBar;