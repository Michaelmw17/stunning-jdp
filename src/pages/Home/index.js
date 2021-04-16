import React, {  lazy } from "react";
import LandingContent from "../../content/LandingContent.json";
import LandingHeader from "../../components/LandingHeader";
import Toggle from "../../components/Toggler"
// import dummyData from "./data";
// import OutlinedButtons from '../../common/ButtonMains/ButtonMain'

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "../../components/useDarkMode"
import { GlobalStyles } from "../../globalStyles";
import { lightTheme, darkTheme } from "../../components/Themes"

import './homeStyles.css';

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
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
  return (<div> 
    <ThemeProvider theme={themeMode}  key={i}>
    <Container>
      <LandingHeader />
      <GlobalStyles/>
        {/* <div className="WhiteContainer">
           <Link to='./About'>
          <Toggle theme={theme} toggleTheme={themeToggler} key={i}/>
          
            
          </Link>
        </div> */}
         
        <>
      
            <div className="App">
              <Link to='./About'>
          <Toggle theme={theme} toggleTheme={themeToggler} key={i}/>
          </Link>
        </div>
      </>
  

        <h1 style={{textAlign: 'center', marginTop:30, color: '#EAB642'}}>Enter JDP Electrical Services</h1>
      <ContentBlock
        type="right"
        first="true"
        title={LandingContent.title}
        content={LandingContent.text}
        icon="developer.svg"
        id="intro"
      />
    </Container>
        </ThemeProvider>
        
    </div>
  );
};

export default  withStyles(styles)(Home);
