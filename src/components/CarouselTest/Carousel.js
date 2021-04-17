import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stylesCarousel.css'
export default class CarouselServices extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        
        <Slider {...settings}>
          <div >
            <h2> "It's just amazing. Absolutely wonderful!"
               <p><small> - Claudelle .</small></p></h2>
            
          </div>
          <div>
            <h2> "It's just amazing. Absolutely wonderful!"
               <p><small> - Claudelle .</small></p></h2>
          </div>
          <div>
             <h2> "It's just amazing. Absolutely wonderful!"
               <p><small> - Claudelle .</small></p></h2>
          </div>
          
        </Slider>
      </div>
    );
  }
}