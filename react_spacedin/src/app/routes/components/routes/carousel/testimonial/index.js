import React from 'react';
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";

const options = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  marginRight: 10,
  slidesToScroll: 1,
};
const TestimonialCarousel = ({testimonials}) => {
  return (

    <Slider {...options}>
      <TestimonialItem testimonial={testimonials[0]}/>
      <TestimonialItem testimonial={testimonials[1]}/>
      <TestimonialItem testimonial={testimonials[2]}/>
      <TestimonialItem testimonial={testimonials[3]}/>
      <TestimonialItem testimonial={testimonials[4]}/>
      <TestimonialItem testimonial={testimonials[5]}/>
      <TestimonialItem testimonial={testimonials[6]}/>
    </Slider>
  )
};

export default TestimonialCarousel;

