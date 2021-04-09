import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
// import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
// import { GrInstagram } from 'react-icons/fa';
// import SocialMediaIcons from 'react-social-media-icons';
import * as S from "./styles";
// var { SocialIcon } = require('react-social-icons');
const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  // const handleChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };
// const socialMediaIcons = [
//   {
//     url: 'https://github.com/andrewgbliss',
//     className: 'fa-github-square',
//   },
//   {
//     url: 'https://gitlab.com/andrewgbliss',
//     className: 'fa-gitlab',
//   },
//   {
//     url: 'https://www.npmjs.com/~andrewgbliss',
//     className: 'fa-npm',
//   },
// ];


  // const SocialLink = ({ href, src }) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   );
  // };

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
                <a href="mailto:info@jdpelectrical.com.au ">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
 
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Joe Panetta")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Ph: 0412 450 300")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("E: joe@jdpelectrical.com.au")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24} >
                <S.Empty />
                <S.Title >{t("Dominic Panetta")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Ph: 0412 479 557")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("E: dom@jdpelectrical.com.au")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Title>{t("General & Accounts")}</S.Title>
                <S.Large left="true" to="/">
                  {t("Ph: (02) 9419 7947 ")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("General email: info@jdpelectrical.com.au")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Accounts email: accounts@jdpelectrical.com.au")}
                </S.Large>
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
                <S.Large left="true" to="/">
                  {t("About")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Home")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Services")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Photos")}
                </S.Large>
              </Col>
              {/* <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </S.LangSelect>
                </S.Select>
              </Col> */}
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
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
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
