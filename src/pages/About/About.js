import React, { lazy } from 'react';
import MissionContent from "../../content/MissionContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import GoogleMap from '../First'
import Carousel from "../../components/CarouselTest/Carousel"
import CarouselServices from "../../components/CarouselTopServices/Carousel"
import './about.css'
import MeetTheTeam from "../../components/MeetTheTeam/team"
import Footer from "../../components/Footer";
// import ContactJs from "../../components/MyContact/myComp";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));

function First() {
  return (
    <div>
      <Container>
        <Header />
       
        <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
        {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}

      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
          id="mission"
        />
        
     
      </Container>
      <MeetTheTeam/>
      <div id="Review">
        <Carousel/>
        </div>
      <div id="Service">
        <CarouselServices
          />
        </div>
        {/* <div className="Contact">
        <ContactJs/>
        </div> */}
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        href={ContactContent.href}
        id="Team"
          />
      <GoogleMap />
      <Footer />
      </div>
      
  );
}


export default First;
