import React from "react";
import Button from '@material-ui/core/Button';

import Widget from "components/Widget/index";

const ToolTheDay = () => {
  return (
    <Widget styleName="jr-card-full text-center">
      <div className="pt-4 px-3">
        <div className="jr-separator bg-primary"/>
        <h3 className="mb-4 text-primary">Today's Tools</h3>
        <div className="d-block mb-4">
          <img className="rounded-circle size-110 object-cover"
               src='https://via.placeholder.com/120x120' alt="spoons"/>
        </div>
      </div>
      <Button color="primary" variant="contained" className="mt-3 jr-fs-sm mb-0 rounded rounded-top-0" htmltype="submit">
        learn more
      </Button>
    </Widget>
  );
};

export default ToolTheDay;
