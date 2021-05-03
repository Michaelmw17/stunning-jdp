import React, { Suspense } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import logo1 from './assets/light2.webp';
import logo from './assets/light3.webp';
import logo2 from './assets/light4.webp';
import Spinner from 'react-bootstrap/Spinner';

const images = [
           {
            src: logo2,
            original: logo2,
            thumbnail: logo2,
            }, 
        {
            src: logo,
            original: logo,
            thumbnail: logo,
            },
        {
            src: logo1,
            original: logo1,
            thumbnail: logo1,
            },
        
   
        ];
        const renderCustomControls = () => {

  const slideToIndex = (index) => null

  return <div className="custom-control">
          <div className="slider">
            <div className="bullet-left" onClick={slideToIndex(1)}></div>
          <div className="bullet" onClick={slideToIndex(5)}></div>
          <div className="bullet" onClick={slideToIndex(6)}></div>
          <div className="bullet" onClick={slideToIndex(7)}></div>
          <div className="bullet" onClick={slideToIndex(8)}></div>
          <div className="bullet-right" onClick={slideToIndex(10)}></div>
          </div>
        </div>
}
        class MyGalleryFirst extends React.Component  {
        render() {
            return  <Suspense fallback={
                            <Spinner animation="border" />
                            }><ImageGallery alt='JPD Photos'
                                    lazyLoad={true}
                                    items={images}
                                    infinite={true}
                                    width="640" height="360" 
                                    renderCustomControls={renderCustomControls}
                            />
            </Suspense>;
        }
        }
        export default MyGalleryFirst;