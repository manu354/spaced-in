import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearQuery() {
  return (
    <div>
      <LinearProgress mode="query"/>
      <br/>
      <LinearProgress color="secondary" mode="query"/>
    </div>
  );
}

export default LinearQuery;