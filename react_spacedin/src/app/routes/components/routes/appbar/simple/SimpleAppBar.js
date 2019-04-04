import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const SimpleAppBar = () => {
  return (
    <AppBar position="static" color="inherit" className="jr-border-radius">
      <Toolbar>
        <IconButton className="jr-menu-icon" aria-label="Menu">
          <span className="menu-icon bg-grey"/>
        </IconButton>
        <h4 className="mb-0">Company Name</h4>
      </Toolbar>
    </AppBar>
  );
};


export default SimpleAppBar;