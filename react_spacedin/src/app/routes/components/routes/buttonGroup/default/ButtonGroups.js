import React from 'react';
import {ButtonGroup} from 'reactstrap';
import Button from '@material-ui/core/Button';

const ButtonGroups = ({isVertical}) => {
  return (
    <ButtonGroup vertical={isVertical}>
      <Button className="jr-btn" color="default">Left</Button>{' '}
      <Button className="jr-btn" color="default">Middle</Button>{' '}
      <Button className="jr-btn" color="default">Right</Button>
    </ButtonGroup>
  );
};

export default ButtonGroups;