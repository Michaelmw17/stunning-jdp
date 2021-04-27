import { Row, Col } from "antd";
// import Grid from '@material-ui/core/Grid';
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton'
import SvgIcon from "../../../components/ImageComp/imgComp";
import Container from '@material-ui/core/Container';

import Button from "../../../common/Button";

import * as S from "./styles";

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
              
                <Row>
            <Container fixed>
            <Row>
            <Col lg={6} md={6} sm={6} xs={24}>
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
              </Col >
            </Row>
            </Container>
 {/* <div className="row"> */}
 
  <div className="col-sm-6 col-md-4 col-md-offset-2 col-lg-6 col-lg-offset-3">
    
  </div>
{/* </div> */}
              </Row>
              {/* </Grid> */}
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
