import React from 'react';
import {ButtonGroup} from 'reactstrap';
import Button from '@material-ui/core/Button';

const FlatButtonGroup = ({isVertical}) => {
  return (
    <ButtonGroup vertical={isVertical}>
      <Button className="jr-flat-btn">Left</Button>{' '}
      <Button className="jr-flat-btn active">Middle</Button>{' '}
      <Button className="jr-flat-btn">Right</Button>
    </ButtonGroup>
  );
};

export default FlatButtonGroup;