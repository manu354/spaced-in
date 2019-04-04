import React from "react";

import Widget from "components/Widget/index";
import {Link} from "react-router-dom";

const AayurvedaCard = () => {
  return (
    <Widget styleName="jr-card-full text-center">
      <div className="pt-4 px-3">
        <div className="jr-separator bg-success"/>
        <h3 className="mb-4 text-success">Aayurveda</h3>
        <p>Learn from experts
          this webinar explains
          right</p>
        <Link to="#learn-more" className="text-uppercase mb-1 jr-fs-sm text-success d-block">learn More</Link>
      </div>
      <img className="card-img-bottom img-fluid" alt="ayurveda" src="https://via.placeholder.com/186x114"/>
    </Widget>
  );
};

export default AayurvedaCard;
