import React from 'react';
import {ButtonGroup} from 'reactstrap';
import Button from '@material-ui/core/Button';

const HighLightedButtonGroup = ({isVertical}) => {
  return (
    <ButtonGroup vertical={isVertical}>
      <Button className="jr-btn">Left</Button>
      <Button className="jr-btn active">Middle</Button>
      <Button className="jr-btn">Right</Button>
    </ButtonGroup>
  );
};

export default HighLightedButtonGroup;