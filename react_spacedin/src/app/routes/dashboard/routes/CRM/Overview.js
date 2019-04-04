import React from "react";

import LineIndicator from "./LineIndicator";
import BubbleMap from "./BubbleMap/index";

const Overview = () => {

  return (
    <div className="jr-card-overview">
      <div className="jr-overview-row">
        <div className="jr-line-indicator-col">
          <h4 className="card-title">Revenu Overview</h4>
          <ul className="jr-line-indicator">
            <li>
              <LineIndicator width="45%" title="Europe" color="purple" value="45%"/>
            </li>
            <li>
              <LineIndicator width="30%" title="North America" color="green" value="30%"/>
            </li>
            <li>
              <LineIndicator width="20%" title="Japan, South Koria" color="yellow" value="20%"/>
            </li>
            <li>
              <LineIndicator width="10%" title="Others" color="grey" value="10%"/>
            </li>
          </ul>
        </div>
        <div className="jr-overview-description">
          <div className="jr-revenu jr-revenu-total">
            <h1>$2,650</h1>
            <span className="jr-fs-md">Total Revenu</span>
          </div>

          <div className="jr-revenu">
            <div className="jr-revenu-row">
              <div className="jr-revenu-col">
                <h3>23</h3>
                <span className="jr-fs-sm">Clients</span>
              </div>

              <div className="jr-revenu-col">
                <h3>07</h3>
                <span className="jr-fs-sm">Countries</span>
              </div>
            </div>
          </div>
        </div>
        <div className="jr-map-col">
          <BubbleMap/>
        </div>
      </div>
    </div>

  );
};

export default Overview;
