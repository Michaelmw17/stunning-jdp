import React, { lazy } from 'react';
import MissionContent from "../../content/MissionContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import GoogleMap from '../First'
import Carousel from "../../components/CarouselTest/Carousel"
// import CarouselServices from "../../components/CarouselTopServices/Carousel"
import './about.css'
import MeetTheTeam from "../../components/ServicesSection/Services"
import Footer from "../../components/Footer";
// import ContactJs from "../../components/MyContact/myComp";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
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
      </Container>
      <div id="Service">
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      /></div>
      <Container>
      <MeetTheTeam/>
       
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
          id="mission"
        />
        <div id="Teams"></div>
      </Container>
      <h1> Meet the Team</h1>
      <div className="team-section">
        <div className="inner-width">
          {/* <h2>Meet our team Designed by <a href="https://www.instagram.com/atulkprajapati2000/">Atul Prajapati</a></h2> */}
          <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="rafeh" />
              <div className="p-name">Joe Panetta</div>
              <div className="p-des">Designer</div>
              <div className="p-sm">
                <a href="/#"><i className="fab fa-facebook-f" /></a>
                <a href="/#"><i className="fab fa-twitter" /></a>
                <a href="/#"><i className="fab fa-instagram" /></a>
                <a href="/#"><i className="fab fa-tumblr" /></a>
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="rafeh" />
              <div className="p-name">Anna Panetta</div>
              <div className="p-des">Designer</div>
              <div className="p-sm">
                <a href="/#"><i className="fab fa-facebook-f" /></a>
                <a href="/#"><i className="fab fa-twitter" /></a>
                <a href="/#"><i className="fab fa-instagram" /></a>
                <a href="/#"><i className="fab fa-tumblr" /></a>
              </div>
            </div>
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="rafeh" />
              <div className="p-name" id="Review">Dominic Panetta</div>
              <div className="p-des">Director</div>
              <div className="p-sm">
                <a href="/#"><i className="fab fa-facebook-f" /></a>
                <a href="/#"><i className="fab fa-twitter" /></a>
                <a href="/#"><i className="fab fa-instagram" /></a>
                <a href="/#"><i className="fab fa-tumblr" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Review">
        <Carousel/>
        </div>
      {/* <div id="Service">
        <CarouselServices
          />
        </div> */}
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
