import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';
import BuildIcon from '@material-ui/icons/Build';
import ApartmentIcon from '@material-ui/icons/Apartment';
// import PhoneIcon from '@material-ui/icons/Phone';
import GroupIcon from '@material-ui/icons/Group';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import * as S from "./styles";
const SvgIcons = lazy(() => import("../../common/SvgIcon"));
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
          <GroupIcon style={{ color: green[500], fontSize: 40   }} />
          <S.Span >{t("About")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <BuildIcon style={{ color: green[500], fontSize: 40   }} />
            <S.Span className="Span">{t("Services")}</S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
            <ApartmentIcon style={{ color: green[500], fontSize: 40 }} />
          <S.Span>{t("Photos")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <ContactMailIcon style={{ color: green[500], fontSize: 40  }} />
          <S.Span>{t("Contact")}</S.Span>
        </S.CustomNavLinkSmall>
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
            <SvgIcons src="logo.svg" />
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
