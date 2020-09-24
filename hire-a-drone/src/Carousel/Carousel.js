import React from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousel from '../img/carousel.jpg';
import carousel1 from '../img/carousel1.jpg';

function Carousel() {
  return (
    <div className="carousel">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={carousel} className="carousel__sliderimg" alt="" />
        <img src={carousel1} className="carousel__sliderimg" alt="" />
      </AliceCarousel>
    </div>
  )
}

export default Carousel;
