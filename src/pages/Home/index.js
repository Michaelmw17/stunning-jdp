import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import LandingContent from "../../content/LandingContent.json";
import LandingHeader from "../../components/LandingHeader";
import { Link } from 'react-router-dom';
import about from '../About/About'
import Button from '@material-ui/core/Button';
import './homeStyles.css';
import GoogleMap from '../First'

import {  Route } from "react-router-dom";
import FullWidthGrid from "../../components/LightBlub/lightBlub";
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
const Home = (props) => {
  const { classes } = props;
  return (
    <Container>
      <LandingHeader />
      
      <Route
        exact path="/"
        component={FullWidthGrid}
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
      />
     <div>
        <div className="Button">
          <Link to="/about">
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
      <Button onClick={about} >
          Enter JPD
        </Button>
          </Fab>
        </Link>
        </div>
     
    </div>
      
      <ContentBlock
        type="right"
        first="true"
        title={LandingContent.title}
        content={LandingContent.text}
        icon="developer.svg"
        id="intro"
      />

     
    </Container>
  );
};

export default  withStyles(styles)(Home);
