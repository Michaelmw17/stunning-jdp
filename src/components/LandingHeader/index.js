import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import * as S from "./styles";

const MyComp = lazy(() => import("../MyComp/myComp"));

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
      
          <Link to="/about">
            
          <HomeIcon style={{ color:"#5085A5", fontSize: 55   }} />
          <S.Span >{t("Welcome")}</S.Span>
        </Link>
        <S.CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
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
                  <MyComp /> 
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
