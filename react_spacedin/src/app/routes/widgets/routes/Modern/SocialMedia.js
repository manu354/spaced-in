import React from "react";
import Button from '@material-ui/core/Button';
import {ButtonGroup} from 'reactstrap';
import Widget from "components/Widget/index";


const SocialMedia = () => {

  return (
    <Widget>
      <div className="card-title mb-1">Social Media</div>
      <h2>Digital Media Marketing Online Webbinar</h2>
      <p className="text-grey fs-sm">27th Aug, 09:30 pm EST</p>
      <p>Learn from experts. This webinar explains right..</p>
      <h4 className="text-primary mb-4 mb-xl-5">Are You ready to join?</h4>
      <ButtonGroup>
        <Button className="jr-btn bg-green text-white">Yes</Button>
        <Button className="jr-btn btn-primary">Maybe</Button>
        <Button className="jr-btn">No</Button>
      </ButtonGroup>
    </Widget>
  );
};

export default SocialMedia;
