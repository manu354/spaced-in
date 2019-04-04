import React from "react";
import Button from '@material-ui/core/Button';

import Widget from "components/Widget/index";

const NewPhotos = () => {
  return (
    <Widget styleName="jr-widget-bg jr-blue-cyan-gradient">
      <span className="jr-widget-badge">$20/month</span>
      <i className="zmdi zmdi-camera jr-fs-xlxl"/>

      <h1 className="jr-fs-xxxl jr-font-weight-bold mb-4 text-white">248</h1>
      <p>NEW PHOTOS ADDED THIS WEEK</p>
      <p>Now kickstart with your next design. Subscribe
        today and save $20/month</p>
      <form>
        <Button className="bg-warning text-white text-capitalize" htmltype="submit">
          Subscribe
        </Button>
      </form>
    </Widget>
  );
};

export default NewPhotos;