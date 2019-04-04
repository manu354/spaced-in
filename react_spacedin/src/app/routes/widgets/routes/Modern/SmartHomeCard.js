import React from "react";

import Widget from "components/Widget/index";

const SmartHomeCard = () => {
  return (
    <Widget styleName="jr-card-full">

      <img className="w-100 card-img-top" alt="example" src="https://via.placeholder.com/176x117"/>
      <div className="px-3 py-2">
        <p className="jr-fs-13 mb-1">Smart home on iPad with smart kids</p>
        <span className="jr-fs-sm text-primary pointer text-uppercase jr-font-weight-medium">Read More</span>
      </div>
    </Widget>
  );
};

export default SmartHomeCard;
