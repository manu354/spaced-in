import React from "react";
import Widget from "components/Widget/index";

const IconCard = ({color, image}) => {
  return (
    <Widget styleName={`jr-card-full px-2 py-3 text-center ${color}`}>
      <div><img alt="disc" src={image}/></div>
    </Widget>
  );
};

export default IconCard;
