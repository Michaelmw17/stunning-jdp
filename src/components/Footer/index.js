import { lazy, Fragment,Suspense  } from "react";
import { Row, Col } from "antd";
import Spinner from 'react-bootstrap/Spinner';
// import Link from '@material-ui/core/Link';
// import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import {  Link } from 'react-router-dom';
// import { GrInstagram } from 'react-icons/fa';
// import SocialMediaIcons from 'react-social-media-icons';
import * as S from "./styles";
// var { SocialIcon } = require('react-social-icons');
// const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const MyComp = lazy(() => import("../../components/MyComp/myComp"));
const Container = lazy(() => import("../../common/Container"));

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
const Footer = ({ t }) => {
const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container id="footer">
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding our services? 
                    Feel free to reach out.`
                  )}
                </S.Para>
                <Mailto email="info@jdpelectrical.com.au " subject="Enquire To JPD" body="Hello world!" >
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </Mailto>
              </Col>
 
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Joe Panetta")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Ph: 0412 450 300")}
                </S.Large>
                <Mailto email="joe@jdpelectrical.com.au" subject="Enquire To JPD" body="Hello Joe!">
                    <S.Chat>{t(`Joe@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
               
              </Col>
              <Col lg={6} md={6} sm={12} xs={24} >
                <S.Empty />
                <S.Title >{t("Dominic Panetta")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Ph: 0412 479 557")}
                </S.Large>
                <Mailto email="dom@jdpelectrical.com.au" subject="Enquire To JPD" body="Hello Dom!">
                    <S.Chat>{t(`Dom@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Title>{t("General & Accounts")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Ph: (02) 9419 7947 ")}
                </S.Large>
                <Mailto email=" info@jdpelectrical.com.au" subject="Enquire To JPD" body="Hello JPD!">
                 <S.Chat>{t(`Info@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
                <S.Large left="true" to="/">
                  
                </S.Large>
                <S.Large left="true" to="/">
                </S.Large>
                <Mailto email=" accounts@jdpelectrical.com.au" subject="Enquire To JPD" body="Hello JPD!">
                   <S.Chat>{t(`Accounts@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>Unit 17 </S.Para>
                <S.Para>4-6 Chaplin Drive</S.Para>
                <S.Para> Lane Cove West NSW 2066</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                {/*Errors below on HOME page*/}
                <S.Large left="true" onClick={() => scrollTo("mission")}>
                  {t("About")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Home")}
                </S.Large>
                
                <S.Large left="true" onClick={() => scrollTo("Service")}>
                  {t("Services")}
                </S.Large>
                <S.Large left="true" onClick={() => scrollTo("Review")}>
                  {t("Reviews")}
                </S.Large>
                <S.Large left="true" onClick={() => scrollTo("Team")}>
                  {t("Contact")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <i className="fab fa-facebook-f fa-2x" />
                <br/>
                <i className="fab fa-instagram fa-2x" />
                <br/>
               <i className="fab fa-twitter fa-2x" />
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <Link to="/" >
                <S.LogoContainer>
                  <Suspense fallback={
                            <Spinner animation="border" />
                            }>
                    <MyComp />
                  
                  {/* <Link to="/" > */}

                                
                    </Suspense>
                {/* </Link> */}
                  {/* <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  /> */}
                </S.LogoContainer>
              {/* </S.NavLink> */}
              </Link>
              <S.FooterContainer>
                {/* <SocialMediaIcons
                    icons={socialMediaIcons}
                    iconSize={'1.3em'}
                    iconColor={'#495056'}
                  /> */}
                {/* <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="/linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                /> */}
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
