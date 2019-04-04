import React from "react";

import Widget from "components/Widget/index";

function FriendshipCard() {

  return (
    <Widget>
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
          <img className="rounded-xl w-100" alt="..." src="https://via.placeholder.com/187x228"/>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
          <div className="jr-fnd-content">
            <p className="text-grey">Outdoor Experience</p>
            <h2 className="text-uppercase jr-font-weight-bold">A Friendship with high waves</h2>
            <p>Had a great time with family on beach this
              weekend.</p>
            <ul className="jr-fnd-gallery-list">
              <li><img alt="..." src="https://via.placeholder.com/70x70"
                       className="rounded-xl img-fluid"/></li>
              <li><img alt="..." src="https://via.placeholder.com/70x70"
                       className="rounded-xl img-fluid"/></li>
              <li><img alt="..." src="https://via.placeholder.com/70x70"
                       className="rounded-xl img-fluid"/></li>
            </ul>
          </div>
        </div>
      </div>
    </Widget>
  );
}

export default FriendshipCard;
