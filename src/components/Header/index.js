import { useState, Fragment, lazy, Suspense } from "react";
import './stylesHeader.css'
import '../../globalStyles'
import Button from '@material-ui/core/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
        import { Link } from 'react-router-dom';
import * as S from "./styles";
const MyComp = lazy(() => import("../../components/MyComp/myComp"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
      
    },
    
  },
  
}));
  const MenuItem = () => {
    const classes = useStyles();
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <div className={classes.root}>
         <S.CustomNavLinkSmall>
            <Link to="/">
          <HomeIcon style={{ color:"#EAB642", fontSize: 40  }} />
              <S.Span><span>{t("Welcome")}</span></S.Span>
              </Link>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Service")}>
          <BuildIcon style={{ color:"#EAB642", fontSize: 40   }} />
            <S.Span className="Span"><span>{t("Services")}</span></S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <InfoIcon style={{color:"#EAB642", fontSize: 40  }} />
          <S.Span ><span>{t("About")}</span></S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Teams")}>
            <SupervisorAccountIcon style={{ color:"#EAB642", fontSize: 40 }} />
          <S.Span><span>{t("Our Team")}</span></S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Teams")}>
            <RateReviewIcon style={{ color:"#EAB642", fontSize: 40 }} />
          <S.Span><span>{t("Reviews")}</span></S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Team")}>
          <ContactMailIcon style={{ color:"#EAB642", fontSize: 40  }} />
          <S.Span><span>{t("Contact")}</span></S.Span>
          </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall >
          <div>
      <Button classes={{ root: 'button', label: 'button-label'}} style={{ marginBottom:'50px' }}><a href="tel:0294-197-947">Call JPD Now!</a>
      </Button>
    </div>
    </S.CustomNavLinkSmall>
        

        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("Team")}
        >
          <S.Span>
          </S.Span>
          </S.CustomNavLinkSmall>
          </div>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
             <Suspense fallback={
                            <Spinner animation="border" />
                            }>
                
                                <MyComp rel="preload" /> 
                    </Suspense>
                
          </S.LogoContainer>
          {/* <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger> */}
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
