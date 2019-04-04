import React from "react";

import Widget from "components/Widget/index";

function UserCard() {

  return (
    <Widget styleName="jr-card-full jr-dot-arrow-hover">
      <div className="media align-items-center flex-nowrap">
        <div className="mr-3">
          <img alt="..." src="https://via.placeholder.com/150x150" className="jr-user-wid object-cover"/>
        </div>
        <div className="media-body py-3 pr-3">
          <div className="d-flex align-items-center">
            <h4 className="mr-1 mb-0">Mila Alba</h4>
            <span className="badge text-white mb-0" style={{backgroundColor: '#52c41a'}}>New</span>
          </div>
          <p className="mb-0 text-grey jr-fs-sm">Creative Head<br/> @example</p>
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

export default UserCard;
