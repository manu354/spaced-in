import React from 'react';
import Fab from '@material-ui/core/Fab';

const FloatingActionButtons = () => {
  return (
    <div className="manage-margin d-flex flex-wrap">
      <Fab color="primary" className="jr-fab-btn" aria-label="add">
        <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
      </Fab>

      <Fab className="jr-fab-btn text-white bg-secondary" aria-label="edit">
        <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
      </Fab>
      <Fab  className="jr-fab-btn" aria-label="edit" disabled>
        <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
      </Fab>
    </div>
  );
};

export default FloatingActionButtons;