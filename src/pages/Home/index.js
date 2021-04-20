import React, {  lazy } from "react";
// import LandingContent from "../../content/LandingContent.json";
import LandingHeader from "../../components/LandingHeader";
import Toggle from "../../components/Toggler"
// import dummyData from "./data";
// import OutlinedButtons from '../../common/ButtonMains/ButtonMain'

import {  NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "../../components/useDarkMode"
import { GlobalStyles } from "../../globalStyles";
import { lightTheme, darkTheme } from "../../components/Themes"
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
 

import './homeStyles.css';
const ContainerHeader = lazy(() => import("../../common/ContainerHeader"));

// const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));

const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});


const Home = (props, i) => {

  
  //  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme ;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVideos(dummyData);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  if(!mountedComponent) return <div/>

  
  // const { classes } = props;
  return (<div className="IntroContainer"> 
    <ThemeProvider theme={themeMode}  key={i}>
      <ContainerHeader>
        <LandingHeader />
      </ContainerHeader>
      <Container>
      <GlobalStyles/>
        <>
          <div className="App">
            <Tooltip
            arrow={8}
      background="#EAB642"
      border="#0e1111"
      color="#FFF"
      content="Click to Enter JDP Electrical"
      fadeDuration={3}
      fadeEasing="linear"
      fixed={false}
      fontFamily="inherit"
      fontSize="inherit"
      offset={0}
      padding={16}
      placement="bottom"
      radius={3}
      zIndex={1}
            
    customCss={css`
      white-space: nowrap;
      word-break: break-all;
    `}
  >

              <NavLink to='/About'>
                
                  <Toggle theme={theme} toggleTheme={themeToggler} key={i} />
                
          </NavLink>
       

  

            </Tooltip>
          </div>
   </>
        <h1 style={{textAlign: 'center', marginTop:30, color: '#EAB642'}}>Enter JDP Electrical Services</h1>
      {/* <ContentBlock
        type="right"
        first="true"
        title={LandingContent.title}
        content={LandingContent.text}
        icon="developer.svg"
        id="intro"
      /> */}
    </Container>
        </ThemeProvider>
        
    </div>
  );
};

export default  withStyles(styles)(Home);
