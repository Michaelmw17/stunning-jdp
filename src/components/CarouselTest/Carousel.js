import React, { Component } from "react";
import Slider from "react-slick";
import Container from '../../common/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stylesCarousel.css'
import '../../globalStyles'
export default class CarouselServices extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      lazyLoad: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      
      paddingLeft: '30px',
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
    return (<>
    <Container>
      {/* <h1>Reviews</h1> */}
      <div className="containerCar">
        
        <Slider {...settings}>
          <div >
            <div className="review"> "It's just amazing. Absolutely wonderful!"
               </div><p><em> - Claudelle .</em></p>
            
          </div>
          <div>
            <div className="review"> "It's just amazing. Absolutely wonderful!"
              </div> <p><em> - Claudelle .</em></p>
          </div>
          <div>
             <div className="review"> "It's just amazing. Absolutely wonderful!"
               </div><p><em> - Claudelle .</em></p>
          </div>
          
        </Slider>
      </div>
      </Container>
      </>
    );
  }
}