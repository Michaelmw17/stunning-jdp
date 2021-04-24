import React from "react";
import ReactCardFlipper from "./ReactCardFlipper";
import injectSheet from "react-jss";
import MyListResidential from '../../common/MyListResidential/list'
import MyListCommercial from '../../common/MyListCommercial/Clist'
import DataList from '../../common/MyListData/list'
import FireList from '../../common/MyListFire/list'
import SecurityList from '../../common/MyListSecurity/list'
import PinnedSubheaderList from '../../common/MyListStrata/list'
import {  Grid, withStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SecurityIcon from '@material-ui/icons/Security';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
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
                  <div className="col-10 text-center col-centered">
                    <div className="Services-section">
                  <div className="inner-width-services">
                  <Grid container spacing={8} justify="flex-start">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ReactCardFlipper
                      width="300px"
                      height="400px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-center">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-name" style={{ fontSize: 20, paddingRight: 50}}>Residential</div>
                        <div className="p-des"><HomeIcon  style={{ fontSize: 220, paddingTop: 10, paddingRight: 50 }} /></div>
                        
                      </div>
                      </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <MyListResidential/>
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
                        <div className="Services">
                          <div className="pie">
                            <div className="p-name" style={{ fontSize: 20, paddingRight: 30}}>Commercial</div>
                            <div className="p-des"><BusinessIcon  style={{ fontSize: 210, paddingTop: 10 }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <MyListCommercial/>
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
                      <div className="Services">
                      <div className="pie">
                        <div className="p-name" style={{ fontSize: 20}}>Strata / Property Maintenance</div>
                        <div className="p-des"><i className="fas fa-tools" style={{ fontSize: 120, paddingTop: 0 }} ></i></div>
                      </div>
                      </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <PinnedSubheaderList/>
                        
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
                      <div className="Services">
                      <div className="pie">
                        <div className="p-name" style={{ fontSize: 20, paddingRight: 20}}>Data / Phone / TV Communications </div>
                        <div className="p-des"><RingVolumeIcon  style={{ fontSize: 190, paddingTop: 10, paddingRight: 30 }} /></div>
                      </div>
                      </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <DataList/>
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
                      <div className="Services">
                      <div className="pie">
                        <div className="p-name" style={{ fontSize: 20, paddingRight: 20}}>Security  </div>
                        <div className="p-des"><SecurityIcon  style={{ fontSize: 190, paddingTop: 10, paddingRight: 30 }} /></div>
                        </div>
                      </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <SecurityList/>
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
                      <div className="Services">
                      <div className="pie">
                        <div className="p-name" style={{ fontSize: 20, paddingRight: 20}}>Fire Detectors </div>
                        <div className="p-des"><WhatshotIcon  style={{ fontSize: 190, paddingTop: 10, paddingRight: 30 }} /></div>
                      </div>
                      </div>
                      </div>
                      <div className="text-center">
                          <div className="p-sm">
                          <FireList/>
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
    color: "black",
  }
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);