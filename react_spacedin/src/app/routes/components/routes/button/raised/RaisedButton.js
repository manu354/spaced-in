import React from 'react';
import Button from '@material-ui/core/Button';

const RaisedButtons = () => {
  return (
    <div className="jr-btn-group">
      <Button variant="contained" className="jr-btn bg-white">Default</Button>
      <Button variant="contained" color="primary" className="jr-btn text-white">Primary</Button>
      <Button variant="contained" className="jr-btn bg-secondary text-white">Secondary</Button>
      <Button variant="contained" className="jr-btn" disabled>Disabled</Button>
    </div>
  );
};

export default RaisedButtons;