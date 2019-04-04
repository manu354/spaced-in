import React from "react";

import Widget from "components/Widget/index";

function BuildingCard() {

  return (
    <Widget styleName="jr-card-full jr-dot-arrow-hover">
      <div className="media align-items-center flex-nowrap">
        <div className="px-3 jr-build-box-lay">
          <img alt="..." src={require('assets/images/widget/building.png')} className=""/>
        </div>
        <div className="media-body py-3 pr-4 jr-build-box-lay-content">

          <span className="badge text-white py-0 mb-0" style={{backgroundColor: '#52c41a'}}>34 New</span>
          <h4 className="text-truncate mb-0">Home & Offices</h4>

          <p className="mb-0 text-grey jr-fs-sm">Properties this week</p>
          <div className="jr-dot-arrow">
            <div className="bg-primary jr-hover-arrow">
              <i className="zmdi zmdi-long-arrow-right text-white"/>
            </div>
            <div className="jr-dot">
              <i className="zmdi zmdi-more-vert text-primary"/>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
}

export default BuildingCard;
