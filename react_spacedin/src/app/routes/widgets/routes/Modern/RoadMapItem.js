import React from "react";

const RoadMapItem = ({data}) => {
  const {image, image2, title, desc} = data;
  return (
    <div className="jr-slider">
      <div className="jr-slider-img">
        <img className="jr-img-lg" alt="example" src={image} style={{maxHeight: 205}}/>
        <img className="jr-img-up" alt="example" src={image2}/>
      </div>
      <div className="jr-slider-content">
        <h4>{title}</h4>
        <p className="text-grey mb-3">{desc}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
