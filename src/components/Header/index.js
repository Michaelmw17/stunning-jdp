import { useState, Fragment, lazy, Suspense, React} from "react";

import '../../globalStyles'
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import RateReviewIcon from '@material-ui/icons/RateReview';
        import { Link } from 'react-router-dom';
import * as S from "./styles";
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});
const MyComp = lazy(() => import("../../components/MyComp/myComp"));

const Header = ({ t, props }) => {
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
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const Styledvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;


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
          
        <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          
           
              <NoSsr>
      <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
                  <InfoIcon style={{ color: "#EAB642", fontSize: 40 }} />
                  <S.Span ><a>{t("About")}</a></S.Span>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Service")}>
          <BuildIcon style={{ color:"#EAB642", fontSize: 40   }} />
            <S.Span className="Span"><a>{t("Services")}</a></S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Review")}>
            <RateReviewIcon style={{ color:"#EAB642", fontSize: 40 }} />
          <S.Span><a>{t("Reviews")}</a></S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Team")}>
          <ContactMailIcon style={{ color:"#EAB642", fontSize: 40  }} />
          <S.Span><a>{t("Contact")}</a></S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall>
            <Link to="/">
          <HomeIcon style={{ color:"#EAB642", fontSize: 40,  }} />
              <S.Span> {t("Home")}</S.Span>
              </Link>
            
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
