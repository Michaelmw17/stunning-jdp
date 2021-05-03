import { Row, Col } from "antd";
import React, { Suspense } from "react";
import { lazy } from '@loadable/component'
import Loader from "react-loader-spinner";
// import Grid from '@material-ui/core/Grid';
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton'
// import SvgIcon from "../../../components/ImageComp/imgComp";
// import Image from "../ImageComponent"
// import ImageTwo from "../ImageComponentSecond"
import Button from "../../../common/Button";
// import MyGalleryFirst from "../ImageComponentSecond";
// import Image2 from "../ImageComponent/index";
import * as S from "./styles";
// const MyGalleryFirst = lazy(() => import("../ImageComponentSecond"));
// const AboutDescription = lazy(() => import('../../AboutContext/aboutDescription'), {
//     fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
// })
// const MyGalleryFirst = lazy(() => import('../ImageComponentSecond'), {
//     fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
// })
const Image2 = lazy(() => import('../ImageComponent/index.js'), {
    fallback: <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>
})
const RightBlock = ({ title, content, contentTwo, button, icon, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>

      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h3>{t(title)}</h3>
              <S.Content>{t(content)}</S.Content>
              {/* <S.Content>{t(contentTwo)}</S.Content> */}
              <S.Content>Brothers Dominic and Joseph Panetta have built a reputable electrical contracting business specialising in all electrical installations and repairs for Residential and Commercial sectors. </S.Content>
              <S.Content>We offer our expert advice and cost effective solutions, and provide options for lasting, efficient and practical lighting designs.</S.Content>

                {/* <Grid container={true} spacing={3}> */}
                 <div>
          <h6 style={{ color: 'red', fontSize:29, textAlign: 'center' }}>“Our approach is simple – we treat your home like our own.”</h6>
          
          </div>
                <Row>
             
 <div className="row">
 
  <div className="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">
    <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                    <ButtonAnimated 
                        key={id}
                      >
                        <S.Span>{t(item.title1)}</S.Span>
                      </ButtonAnimated>
                      
                    );
                  })}
              </S.ButtonWrapper>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => scrollTo("Team")}
                      > 
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
  </div>
</div>
              </Row>
              {/* </Grid> */}
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={8} md={11} sm={12} xs={24}>
          <Slide right>
             {/* <ImageTwo id='ImageCompTwo'/> */}
             {/* <Image id='ImageComp'/> */}
            {/* <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            /> */}
            <Suspense fallback={<div><Loader type="Rings" color="#00BFFF" height={80} width={80} /></div>}>
                              <Image2/>
                        </Suspense>
                      
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
