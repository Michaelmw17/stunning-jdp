import React from "react";
import ReactCardFlipper from "./ReactCardFlipper";
import injectSheet from "react-jss";
import {  Grid, withStyles } from "@material-ui/core";
import './teamStyle.css'
const styles = {
  root:{
  },
  container: {
    display: "flex"
  },
};
const TestApp = ({ classes }) => {
    return (<>
        <h1>Meet The Team</h1>
        <div className={classes.container}>
            <div id="main" className="container">
      <div className="row">
        <div className="col-10 text-center col-centered">
           <div className="team-section">
        <div className="inner-width">
        <Grid container spacing={6} justify="flex-start">
          <Grid item xs={12} sm={6} md={6} lg={4}>
          <ReactCardFlipper
            width="300px"
            height="400px"
            behavior="hover"
            className={classes.root}
            innerCardClass={classes.card}
          >
           <div className="text-center">
             <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="rafeh" />
              <div className="p-name">Joe Panetta</div>
              <div className="p-des">Engineer</div>

            </div>
            </div>
            </div>
            <div className="text-center">
                <div className="p-sm">

                <p><em>Backbone of the business</em></p>
                <i className="fab fa-facebook-f fa-lg" />
                <i className="fab fa-instagram fa-lg" />
               <i className="fab fa-twitter fa-lg" />
               
              </div>
            </div>
          </ReactCardFlipper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
           <ReactCardFlipper
            width="300px"
            height="400px"
            behavior="hover"
            className={classes.root}
            innerCardClass={classes.card}
          >
            <div className="text-center">
             <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="rafeh" />
              <div className="p-name">Anna Panetta</div>
              <div className="p-des">Engineer</div>

            </div>
            </div>
            </div>
            <div className="text-center">
                <div className="p-sm">

                <p><em>Light of the business</em></p>
                <i className="fab fa-facebook-f fa-lg" />
                <i className="fab fa-instagram fa-lg" />
               <i className="fab fa-twitter fa-lg" />
               
              </div>
            </div>
          </ReactCardFlipper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ReactCardFlipper
            width="300px"
            height="400px"
            behavior="hover"
            className={classes.root}
            innerCardClass={classes.card}
          >
            <div className="text-center">
             <div className="pers">
            <div className="pe">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="rafeh" />
              <div className="p-name">Dominic Panetta</div>
              <div className="p-des">Engineer</div>
              

            </div>
            </div>
            </div>
            <div className="text-center">
                <div className="p-sm">
                <p><em>Core of the business</em></p>
                <i className="fab fa-facebook-f fa-lg" />
                <i className="fab fa-instagram fa-lg" />
               <i className="fab fa-twitter fa-lg" />
               
              </div>
            </div>
          </ReactCardFlipper>
          </Grid>
        </Grid>
      </div>
      </div>
      </div>
    
       
        </div>
      </div>
        </div>
    </>
    )
};

const styling = {
  root: {
    display: "block",
    margin: "50px",

    position: "relative"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "50px",
      
  background:' #EAB642',
  '-webkit-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
  '-moz-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
  'box-shadow':" 0 7px 8px rgba(0, 0, 0, 0.12)",
    color: "white",
  }
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);