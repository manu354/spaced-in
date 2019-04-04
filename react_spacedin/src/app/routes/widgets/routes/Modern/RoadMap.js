import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RoadMapItem from "./RoadMapItem";
import {mediaList} from "./data"
import Widget from "components/Widget/index";

class RoadMap extends Component {

  render() {

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Widget styleName="jr-card-full">
        <Slider className="jr-slick-slider" {...settings}>
          {mediaList.map((media, index) =>
            <RoadMapItem key={index} data={media}/>
          )
          }
        </Slider>
      </Widget>
    );
  }
}

export default RoadMap;
