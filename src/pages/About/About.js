import React, { lazy } from 'react';
// import MissionContentOne from "../../content/MissionContentOne.json";
import MissionContent from "../../content/MissionContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MiddleBlockContentTwo from "../../content/MiddleBlockContentTwo.json";
import MiddleBlockContentThree from "../../content/MiddleBlockContentThree.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";

import Header from "../../components/Header";
// import MeetTeam from "../../components/MeetTheTeamHover";
// import GoogleMap from '../First'
// import Form from '../../components/VaildtionForm';

// import Carousel from "../../components/CarouselTest/Carousel"
// import CarouselServices from "../../components/CarouselTopServices/Carousel"
import './about.css'
// import MeetTheTeam from "../../components/ServicesSection/Services"
import Footer from "../../components/Footer";
// import ContactJs from "../../components/MyContact/myComp";
import loadable from '@loadable/component'
const MeetTheTeam = loadable(() => import('../../components/ServicesSection/Services.js'))

const Carousel = lazy(() => import("../../components/CarouselTest/Carousel"));
const MeetTeam = lazy(() => import("../../components/MeetTheTeamHover"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlockMain = lazy(() => import("../../components/ContentBlockMain"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const MiddleBlockTwo = lazy(() => import("../../components/MiddleBlockTwo"));
// const Block = lazy(() => import("../../components/Block"));
// const MiddleBlock1 = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));

function First() {
  return (
    <div>
      <Container>
        <Header />
        <ContentBlockMain
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      </Container>
      <div id="Service">
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        
      />
      <MiddleBlockTwo
        content={MiddleBlockContentTwo.text}
        
      />
      <MiddleBlockTwo
        content={MiddleBlockContentThree.text}
        
      />
     
      </div>
      <Container>
      <MeetTheTeam/>
        <div id="People"></div>
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        
        icon="product-launch.svg"
          id="mission"
        />
      {/* <Block
        type="right"
        content={MissionContentOne.text}
        
        icon="product-launch.svg"
          id="mission"
        /> */}
        <div id="Teams"></div>
      </Container>

      <MeetTeam/>
     
      <div id="Review">
        <Carousel/>
        </div>
      {/* <div id="Service">
        <CarouselServices
          />
        </div> */}
        {/* <div className="Contact">
        <ContactJs/>
        </div> 
        
        <div className="pe-one">
              <div className="p-name">Anna Panetta</div>
              <div className="p-des">Designer</div>
              <div className="p-sm">
               <button></button>
               </div>
            </div>
        */}
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        href={ContactContent.href}
        id="Team"
          />
          {/* <Form/> */}
      <Footer />
      </div>
      
  );
}


export default First;
