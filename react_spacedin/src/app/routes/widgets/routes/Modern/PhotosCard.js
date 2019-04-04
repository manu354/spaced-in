import React from "react";

import Widget from "components/Widget/index";

const PhotosCard = () => {
  return (
    <Widget styleName="jr-orange-yellow-gradient text-white p-4">
      <h2 className="jr-font-weight-bold text-white mb-1">523</h2>
      <p>+18 New this week</p>
      <p className="text-uppercase jr-fs-sm mb-0">Photos</p>
    </Widget>
  );
};

export default PhotosCard;
