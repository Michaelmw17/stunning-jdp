import React  from "react";
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
import ContainerCardFlip from '../../components/ContainerCardFlip';
// const Container = lazy(() => import("../../common/ContainerCardFlip"));
// import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
const styles = {
  root:{
    
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
  transition: '.5s all ease',
  transform: 'rotateX(10deg) scale(1)',
  perspective: '900px',

  },
  
};

const TestApp = ({ classes }) => {
    return (<>
     <ContainerCardFlip >
        <div className={classes.container}>
            <div id="main" className="containerS">
                <div className="row">
                    <div className="Services-section">
                  <div className="inner-width-services">
                  <Grid container spacing={8} justify="flex-start">
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ 
                          fontSize: 20, paddingRight:"20px", paddingBottom: 0
                           }}>Residential</div>
                        <HomeIcon  style={{
                           fontSize: 230, paddingTop: 0, paddingLeft: 10 ,
                           }} /></div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ 
                            marginLeft: 80,fontSize: 20,color: '#FFF',
                             textTransform: 'uppercase', listStyleType: 'none'
                             }}>Residential</p>
                          <MyListResidential/>
                      </div>
                    </ReactCardFlipper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    
                      <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ 
                          fontSize: 20, paddingRight: 35, marginTop: -5}
                          }>Strata / Property Maintenance</div>
                          <BuildSharpIcon  style={{ 
                        fontSize: 210, paddingTop: 0, color: "#FFF", paddingLeft: 45
                          }} />
                          {/* <FlipCameraAndroidIcon  style={{ 
                        fontSize: 100, color: "#FFF", paddingLeft: 0, paddingTop: 30,
  top: "0px",
  left: "10px",
                          }}/> */}
                      </div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ marginLeft: 60,fontSize: 20,color: '#FFF', textTransform: 'uppercase'}}>Strata / Property Maintenance</p>
                          <PinnedSubheaderList/>
                      </div>
                    </ReactCardFlipper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                    <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                        <div className="Services">
                          <div className="pie">
                            <div className="p-naming" style={{ 
                              fontSize: 20, paddingLeft: 0, paddingBottom: 15 
                              }}>Commercial</div>
                            <BusinessIcon  style={{ 
                              fontSize: 220, paddingTop: 50, color: "#FFF", 
                              paddingLeft: 30 }} />
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                      <p style={{ 
                        marginLeft: 80,fontSize: 20,color: '#FFF', 
                        textTransform: 'uppercase', listStyleType: 'none'
                        }}>Commercial</p>
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
     </ContainerCardFlip >
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
  // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
 
    color: "white",
  }
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);