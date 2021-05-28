
import React, { Suspense, lazy } from "react";
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton'
import * as S from "./styles";
import './styling.css'
const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));

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
     <Suspense fallback={<div>Loading..</div>}>
    <S.RightBlockContainer>

      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h3>{t(title)}</h3>
              <S.Content>{t(content)}</S.Content>
              <S.Content>Brothers Dominic and Joseph Panetta have built a reputable electrical contracting business specialising in all electrical installations and repairs for Residential and Commercial sectors. </S.Content>
              <S.Content>We offer expert advice to customers, and assist them with design and implementation solutions providing them with lasting, efficient and practical lighting designs. We ensure all your electrical needs are met.</S.Content>
              <S.Content>Our guarantee of quality work and our commitment to providing the best and most cost-effective solutions to your electrical needs, is why JDP Electrical are known as trusted electrical contractors..</S.Content>
                <div>
          <h6 style={{ color: 'red', fontSize:22, textAlign: 'center', marginBottom: 5, marginTop: -80}}>“Our approach is simple – we treat your home like our own.”</h6>
          <Col lg={12} md={24} sm={24} xs={24}>
          
    </Col>
          <h6 style={{ color: 'black', fontSize:20, textAlign: 'center', marginBottom: 40, marginTop: -80}}><S.CustomNavLinkSmall >
          <div id="ButtonMain">
          <a href="tel:02-9419-7947">
            <Button classes={{ root: 'buttonMain',  label: 'button-label-main'}} style={{  
              marginBottom:40, 
              background:  'FFF',
              color: 'rgb(209, 29, 50)',
              fontSize: '1rem',
              fontWeight: 600,
              width: "100%",
              border:'2px solid  rgb(209, 29, 50)',
              borderRadius: "8px",
              height: "50px",
              right: "0",
              outline: "none",
              cursor: "pointer",
              maxWidth: "180px",
        }}>
        <p style={{padding: "1px", paddingTop: "18px"}}> CALL US NOW  </p>
      <PhoneForwardedIcon/>
      </Button>
      </a>
    </div>
    </S.CustomNavLinkSmall> 
    </h6>
          </div>
                <Row>
              <div className="row">
                <div className="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">
                  <S.ButtonWrapper>
                              {button &&
                                typeof button === "object" &&
                                button.map((item, id) => {
                                  return (
                                  <ButtonAnimated key={id}>
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
        <Col lg={12} md={24} sm={24} xs={24}>
            <Slide right>
              <Suspense fallback={<div>
                <Loader type="Rings" color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} />
                      </div>}>
                            <Image2 rel="preload" />
                  </Suspense>
            </Slide>
          </Col>
        </Row>
      </S.RightBlockContainer>
    </Suspense>
  );
};

export default withTranslation()(RightBlock);
