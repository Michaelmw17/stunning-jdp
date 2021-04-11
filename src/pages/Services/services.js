import React from "react";
import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// import {  Route } from "react-router-dom";
// import FullWidthGrid from "../../components/LightBlub/lightBlub";

// const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));



// import styled from "styled-components";
// import '../App.css'
function Services() {
  return (
    <div>
     <Container>
      <ScrollToTop />
      
      
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
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


export default Services;
