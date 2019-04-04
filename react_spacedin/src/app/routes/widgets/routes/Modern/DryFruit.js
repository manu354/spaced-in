import React from "react";
import Button from '@material-ui/core/Button';

import Widget from "components/Widget/index";

const DryFruit = () => {
  return (
    <Widget styleName="jr-card-full text-center pt-4 pb-3 px-3">
      <div className="jr-separator bg-warning"/>
      <h3 className="mb-4 text-warning">Dry Fruit</h3>
      <div className="d-block mb-4">
        <img className="rounded-circle size-110 object-cover" src="https://via.placeholder.com/120x120" alt="khajoor"/>
      </div>
      <Button className="btn btn-sm bg-warning text-white" htmltype="submit">
        Add to Cart
      </Button>
    </Widget>
  );
};

export default DryFruit;
