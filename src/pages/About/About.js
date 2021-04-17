import React, { lazy } from 'react';
import MissionContent from "../../content/MissionContent.json";
// import Loader from "react-loader-spinner";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import GoogleMap from '../First'
// import MyButton from '../../components/MyButton/index'
import Carousel from "../../components/CarouselTest/Carousel"
import CarouselServices from "../../components/CarouselTopServices/Carousel"
// import { BrowserRouter, Route, Link } from "react-router-dom";

import './about.css'
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ContainerHeader = lazy(() => import("../../common/ContainerHeader"));

function First() {
  return (
    <div>
      <Container>
        <Header />
        {/* <Carousel /> */}
        <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
        <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      /> */}
        <div id="Service">
        <CarouselServices
           /></div>
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
          id="mission"
          
        />
        <div id="Review">
        <Carousel
         
        /></div>
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
       
            
             
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        href={ContactContent.href}
        id="Team"
          />
        {/* <Link to="https://www.google.com/maps/search/nit+17+4-6+Chaplin+Drive+Lane+Cove+West+NSW+2066./@-33.8098656,151.1461655,17z/data=!3m1!4b1" target="_blank" className="Link">
          Unit 17 4-6 Chaplin Drive Lane Cove West NSW 2066
        </Link> */}
         <GoogleMap/>
      </Container>
      <div className="team-section">
        <div className="inner-width">
          <h2>Meet our team</h2>
          <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="rafeh" />
              <div className="p-name">Joe Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">

                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
               <i className="fab fa-twitter" />
               
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="rafeh" />
              <div className="p-name">Anna Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
               <i className="fab fa-twitter" />
                
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="rafeh" />
              <div className="p-name">Dominic Panetta</div>
              <div className="p-des">Engineer</div>
              <div className="p-sm">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
                <i className="fab fa-twitter" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  );
}


export default First;
