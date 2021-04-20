import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stylesCarouselTwo.css'
// import ButtonMain from "../../common/ButtonMains/ButtonMain"
export default class CarouselServices extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      spacing: 60,
      slidesToShow: 3,
      slidesToScroll: 1,
	    responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1008,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			// settings: "unslick"
		}

	]
};
    return (
      <div className="containerCar">
        <h2 style={{textAlign: 'center'}}> Services</h2>  
        <Slider {...settings}> 
          <div className="Services">
            
            {/* <ButtonMain></ButtonMain> */}
            <h4> Residential</h4>
            <p>Databoard upgrade led lighting
              light powerpoint</p>
              
          </div>
          <div className="Services">
            <h4>Maintenance</h4>
            <p>JDP Electrical Services provide a full range of electrical services and installations for homeowners</p>
          </div>
          <div className="Services">
            <h4>Commercial</h4>
            <p>We understand that safety is paramount in the home. As such, all electrical work is carried out by our qualified and fully insured electricians. All electrical works carried out are in compliances with AS/NZ3000 wiring regulations for electrical installation and are fully certified.</p>
          </div>
          
        </Slider>
      </div>
    );
  }
}