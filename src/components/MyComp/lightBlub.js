import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../globalStyles'
import $ from 'jquery';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme, id) => ({
    
  root: {
    flexGrow: 1,
  },
}));
// const scrollTo = (id) => {
//     const element = document.getElementById(id);
//     element.scrollIntoView({
//       behavior: "smooth",
//     });
//   };




export default function FullWidthGrid() {
  const classes = useStyles();
const [checked, setChecked] = React.useState(false);
$(function(){
  $(".enter-btn").click(function(){
    $("body").toggleClass(" active");
  });  
});

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
      <div className="section group">
	<div className="col span_1_of_2">
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              {/* <Link to="/about">About</Link> */}
               <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
               {/* <Link to="/contact">Contact</Link> */}
                <div className="container">
                  
                <div className="fancy-bulb">
                    <div className="left-streaks streaks" />
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 275.3 413.3"
                                        enableBackground="new 0 0 275.3 413.3"
                                        xmlSpace="preserve">
                    <g id="on">
                        <path fill="#E2ECF1" d="M137.7,13.7C67.2,13.7,10,70.9,10,141.4c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8
                            c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z" />
                    </g>
                    <g id="on">
                        <path fill="#FFDB55" d="M147.7,13.7C67.2,13.7,10,70.9,10,141.4c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8
                            c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z" />
                    </g>
                    <g id="outline">
                        <path fill="#F1F2F2" stroke="#38435A" strokeWidth="19.1022" strokeMiterlimit={10} d="M168.5,375.5h-61.7c-8.9,0-16-7.2-16-16
                            v-55.8h93.8v55.8C184.6,368.3,177.4,375.5,168.5,375.5z" />
                        <path fill="#F1F2F2" stroke="#38434A" strokeWidth="19.1022" strokeMiterlimit={10} d="M151.2,401.5h-27.1c-3.9,0-7-3.2-7-7v-19
                            h41.1v19C158.2,398.4,155.1,401.5,151.2,401.5z" />
                        <line fill="none" stroke="#38435A" strokeWidth="19.1022" strokeMiterlimit={10} x1="184.6" y1="339.6" x2="90.8" y2="339.6" />
                        <path fill="none" stroke="#38435A" strokeWidth="19.1022" strokeMiterlimit={10} d="M137.7,13.7C67.2,13.7,10,70.9,10,141.4
                        c0,58.3,72.8,118.2,79.9,162.3h47.8h47.8c7.1-44,79.9-103.9,79.9-162.3C265.3,70.9,208.2,13.7,137.7,13.7z" />
                    </g>
                    <g id="highlight">
                        <path fill="#FFDB55" stroke="#FFF"
                            strokeWidth="21.0124" strokeLinecap="round" strokeMiterlimit={10} d="M207.1,89.5
                            c-12.3-16.1-28.4-29.1-46.9-37.8" />
                            <path fill="#FFDB56" stroke="#FFF"
                                strokeWidth="21.0124" strokeLinecap="round" strokeMiterlimit={10} d="M225,121.4
                            c-0.8-2.2-1.8-4.4-2.7-6.5" />
                    </g>
                      </svg>
                      <div className="right-streaks streaks" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="col span_1_of_2">
        <FormGroup>
            <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={toggleChecked}
                className="enter-btn"
                        />}
              label=" "
            />
          </FormGroup>
        </div>
        </div>
    );
}