import React, {Component} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {greenStepList} from "./data"
import GreenStepItem from "./GreenStepItem";
import Widget from "components/Widget/index";

class GreenStepCard extends Component {

  state = {
    image: greenStepList[0].image,
    loading: false
  }

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
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="jr-slick-slider-lt-thumb"><img
              className={this.state.loading ? 'fadeout img-fluid' : 'fadein img-fluid'} src={this.state.image}
              alt="..."/></div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <Slider className="jr-slick-slider jr-slick-slider-dot-top" {...settings}
                    afterChange={(index) => {
                      this.setState({loading: false, image: greenStepList[index].image,})
                    }}
                    beforeChange={(oldIndex, newIndex) => {
                      this.setState({
                        loading: true
                      });
                    }}>
              {greenStepList.map((data, index) =>
                <GreenStepItem key={index} data={data}/>)
              }
            </Slider>
          </div>
        </div>
      </Widget>
    );
  }
}

export default GreenStepCard;
