import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function CircularIndeterminate() {
  return (
    <div className="manage-margin">
      <CircularProgress/>
      <CircularProgress size={50}/>
      <CircularProgress color="secondary"/>
      <CircularProgress color="secondary" size={50}/>
    </div>
  );
}

export default CircularIndeterminate;