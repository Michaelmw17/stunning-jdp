import React from "react";
import ReactCardFlipper from "./ReactCardFlipper";
import injectSheet from "react-jss";
import MyListResidential from '../../common/MyListResidential/list'
import MyListCommercial from '../../common/MyListCommercial/Clist'
import PinnedSubheaderList from '../../common/MyListStrata/list'
import {  Grid, withStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import './ServicesStyles.css'

const styles = {
  root:{
  },
  container: {
    display: "flex"
  },
};

const TestApp = ({ classes }) => {
    return (<>
        <div className={classes.container}>
            <div id="main" className="containerS">
                <div className="row">
                    <div className="Services-section">
                  <div className="inner-width-services">
                  <Grid container spacing={8} justify="flex-start">
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ReactCardFlipper
                      width="300px"
                      height="490px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ fontSize: 20, paddingRight: 20, paddingBottom: 40 }}>Residential</div>
                        <HomeIcon  style={{ fontSize: 220, paddingTop: 10, paddingLeft: 20 }} /></div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ marginLeft: 70,fontSize: 20,color: '#FFF', textTransform: 'uppercase', listStyleType: 'none'}}>Residential</p>
                          <MyListResidential/>
                      </div>
                    </ReactCardFlipper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    
                      <ReactCardFlipper
                      width="300px"
                      height="480px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ fontSize: 20, paddingRight: 20}}>Strata / Property Maintenance</div>
                        {/* <i className="fas fa-tools" style={{ fontSize: 120, paddingTop: 0, paddingLeft: 20 }} ></i></div> */}
                      <BuildSharpIcon  style={{ fontSize: 200, paddingTop: -40, color: "#FFF", paddingLeft: 60 }} />
                        
                      </div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ marginLeft: 30,fontSize: 20,color: '#FFF', textTransform: 'uppercase'}}>Strata / Property Maintenance</p>
                          <PinnedSubheaderList/>
                      </div>
                    </ReactCardFlipper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                    <ReactCardFlipper
                      width="300px"
                      height="480px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                        <div className="Services">
                          <div className="pie">
                            <div className="p-naming" style={{ fontSize: 20, paddingLeft: 5, paddingBottom: 15 }}>Commercial</div>
                            <BusinessIcon  style={{ fontSize: 220, paddingTop: 50, color: "#FFF", paddingLeft: 30 }} />
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                      <p style={{ marginLeft: 60,fontSize: 20,color: '#FFF', textTransform: 'uppercase', listStyleType: 'none'}}>Commercial</p>
                          <MyListCommercial/>
                      </div>
                    </ReactCardFlipper>
                    </Grid>
                  </Grid>
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
    borderRadius: "29px",
    padding: "10px",
    marginBottom: "50px",
      
  background:' RGB(209, 29, 50)',
  '-webkit-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
  '-moz-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
  'box-shadow':" 0 7px 8px rgba(0, 0, 0, 0.12)",
    color: "white",
  }
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);