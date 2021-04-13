import { useState, Fragment, lazy, Suspense } from "react";


import Spinner from 'react-bootstrap/Spinner';
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
// import { grey } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';
import BuildIcon from '@material-ui/icons/Build';
// import ApartmentIcon from '@material-ui/icons/Apartment';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
// import PhoneIcon from '@material-ui/icons/Phone';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
        import { Link } from 'react-router-dom';
import * as S from "./styles";
// const SvgIcons = lazy(() => import("../../common/SvgIcon"));
const MyComp = lazy(() => import("../../components/MyComp/myComp"));
// const Button = lazy(() => import("../../common/Button"));

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
//   function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }
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
          {/* <HomeIcon style={{ color: green[500], fontSize: 40   }} /> */}
          <GroupIcon style={{color:"#5085A5", fontSize: 40   }} />
          <S.Span >{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <BuildIcon style={{ color:"#5085A5", fontSize: 40   }} />
            <S.Span className="Span">{t("Services")}</S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <CameraAltIcon style={{ color:"#5085A5", fontSize: 40 }} />
          <S.Span>{t("Photos")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <ContactMailIcon style={{ color:"#5085A5", fontSize: 40  }} />
          <S.Span>{t("Contact")}</S.Span>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall>
            <Link to="/">
          <HomeIcon style={{ color:"#5085A5", fontSize: 40  }} />
              <S.Span>{t("Home")}</S.Span>
              </Link>
          </S.CustomNavLinkSmall>
          {/* <Link to="/about">
          <HomeIcon style={{ color: grey[500], fontSize: 55   }} />
          <GroupIcon style={{ color: grey[500], fontSize: 40   }} />
          <S.Span >{t("Welcome")}</S.Span>
        </Link> */}
        
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <S.Span>
            {/* <PhoneIcon style={{ color: green[500] }} /> */}
            {/* <Button>{t("Contact")}</Button> */}
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
            {/* <SvgIcons src="logo.svg" /> */}
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
