import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Widget from "components/Widget/index";


const Newsletter = () => {
  return (
    <Widget>
      <h4 className="text-primary mb-3 mb-lg-4"><i className="zmdi zmdi-email-open mr-3"/> Newsletter Subscription </h4>
      <p className="jr-fs-xxl mb-4 font-weight-light">Dont's miss our weekly news and updates</p>
      <form>
        <TextField className="w-100 mb-4"
                   id="uncontrolled"
                   label="Uncontrolled"
                   defaultValue="Username"
        />
        <Button variant="contained" color="primary" className="mb-0 text-capitalize" htmltype="submit">
          Subscribe
        </Button>
      </form>
    </Widget>
  );
};

export default Newsletter;
