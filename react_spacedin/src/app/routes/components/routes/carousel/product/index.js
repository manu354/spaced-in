import React from 'react';
import Slider from "react-slick";
import ProductItem from "./ProductItem";

const ProductCarousel = ({products}) => {

  const options = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    marginRight: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      }, {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <Slider className="slick-app-frame" {...options} >
      <div class="slick-slide-item">
        <ProductItem product={products[0]}/>
      </div>
      <div class="slick-slide-item">
        <ProductItem product={products[1]}/>
      </div>
      <div class="slick-slide-item">
        <ProductItem product={products[2]}/>
      </div>
      <div class="slick-slide-item">
        <ProductItem product={products[3]}/>
      </div>
      <div class="slick-slide-item">
        <ProductItem product={products[4]}/>
      </div>
      <div class="slick-slide-item">
        <ProductItem product={products[5]}/>
      </div>
    </Slider>
  );
};


export default ProductCarousel;