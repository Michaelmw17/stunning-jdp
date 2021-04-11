import React, { lazy, Suspense } from 'react';
import MissionContent from "../../content/MissionContent.json";
import Loader from "react-loader-spinner";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
// import FullWidthGrid from "../../components/LightBlub/lightBlub";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import GoogleMap from '../First'

// import Col from 'react-bootstrap/Col'
// import {  Route } from "react-router-dom";
import './about.css'
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MyComponent = lazy(() => import('../../components/Google/GoogleMap'), {
  fallback: <div><Loader
    type="Rings"
    color="#00BFFF"
    timeout={9000}
    height={80} width={80} /></div>
})
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
function First() {
  return (
    
    <div>
      <Container>

        <Header />
          <div className="google-plus">
                    <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                  <MyComponent/>
                            </Suspense>
        </div>
       
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
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
        />
         <GoogleMap/>
      </Container>
      {/* <Col xs={12} md={6} lg={6} > */}
                
                          {/* </Col> */}
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
                {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
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
                {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
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
                {/* <a href="#"><i className="  fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a> */}
                {/* <a href="#"><i className="fab fa-tumblr" /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  );
}


export default First;
