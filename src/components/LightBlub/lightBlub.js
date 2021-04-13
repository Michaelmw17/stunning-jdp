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
                <div className="container">
                  <h5>Click me</h5> 
                <div className="fancy-bulb">
                  <div className="left-streaks streaks" />
                  <div  className="enter-btn" >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="160.000000pt" height="200.000000pt" viewBox="0 0 900.000000 900.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M6422 7534 c8 -16 8 -35 2 -57 -6 -19 -7 -101 -3 -202 4 -93 5 -1423 3 -2954 l-5 -2783 -27 -35 c-52 -67 -49 -66 -432 -64 -190 1 -997 3 -1795 6 -797 2 -1460 6 -1472 10 -13 4 -35 1 -54 -9 -42 -21 -44 -21 -85 10 -38 29 -42 25 -18 -14 22 -36 68 -72 112 -88 30 -11 376 -13 1817 -13 1044 0 1807 3 1844 9 78 11 136 49 168 109 l23 42 0 2986 1 2986 -22 31 c-12 18 -32 37 -44 43 -22 10 -23 9 -13 -13z"></path> <path d="M4642 5038 c3 -7 27 -19 54 -26 79 -23 112 -43 175 -107 81 -81 111 -147 133 -290 15 -93 15 -93 21 35 1 41 -23 128 -42 151 -7 8 -13 21 -13 27 0 16 -120 142 -135 142 -7 0 -15 7 -19 15 -3 8 -13 15 -23 15 -10 0 -27 7 -37 15 -11 8 -32 15 -47 15 -15 0 -31 5 -34 10 -9 14 -37 12 -33 -2z"></path> <path d="M4276 4961 c-3 -5 -25 -14 -50 -20 -24 -6 -60 -25 -81 -43 -44 -39 -105 -120 -105 -139 0 -8 -8 -27 -17 -44 -24 -45 -24 -376 0 -420 9 -16 17 -38 17 -48 0 -48 85 -142 165 -182 118 -59 456 -65 560 -11 38 20 51 20 35 1 -7 -8 -20 -15 -30 -15 -10 0 -20 -7 -24 -15 -3 -8 -13 -15 -23 -15 -10 -1 -34 -10 -53 -21 l-35 -20 60 7 c33 3 67 12 76 20 8 8 21 14 27 14 13 0 118 103 132 130 14 26 -7 37 -25 14 -8 -11 -15 -14 -15 -7 0 6 4 14 9 17 14 9 42 103 53 185 21 144 8 325 -30 408 -23 52 -74 123 -89 123 -7 0 -16 6 -20 13 -4 6 -26 20 -48 30 -22 10 -53 25 -68 33 -22 11 -75 14 -222 14 -107 0 -196 -4 -199 -9z m408 -36 c3 -8 13 -15 21 -15 51 0 175 -121 175 -171 0 -8 6 -21 13 -27 9 -10 12 -65 12 -205 0 -177 -2 -196 -22 -239 -31 -67 -96 -133 -162 -165 -55 -28 -59 -28 -241 -28 -184 0 -185 0 -245 29 -33 16 -70 39 -81 50 -31 30 -84 120 -84 142 0 10 -7 28 -15 38 -22 29 -22 328 0 346 8 7 15 21 15 32 0 21 22 65 53 107 22 31 113 91 137 91 9 0 23 7 30 15 10 12 46 15 200 15 158 0 189 -2 194 -15z"></path> <path d="M4375 4542 c-10 -10 -5 -58 7 -70 7 -7 45 -12 98 -12 74 0 90 3 105 20 16 17 16 24 6 44 -12 22 -18 23 -112 23 -54 0 -101 -2 -104 -5z"></path> <path d="M4946 4202 c-4 -13 -5 -26 -2 -29 10 -11 18 4 14 29 l-4 23 -8 -23z"></path> <path d="M4100 4055 c0 -8 6 -15 14 -15 8 0 16 -7 20 -15 3 -8 14 -15 25 -15 11 0 24 -6 28 -13 20 -31 146 -44 376 -39 119 3 71 19 -55 18 -152 -1 -245 7 -261 23 -6 6 -21 11 -34 11 -13 0 -23 4 -23 9 0 5 -13 14 -30 20 -16 5 -30 15 -30 20 0 6 -7 11 -15 11 -8 0 -15 -7 -15 -15z"></path> </g> </svg>
                  </div>
                  
                      <div className="right-streaks streaks" />
                </div>
                
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      <div className="col span_1_of_2">
        
        <FormGroup>
            
          </FormGroup>
        </div>
        </div>
    );
}
// import React, {lazy } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// // import { Link } from 'react-router-dom';

// import './mainStyles.css';
// const Container = lazy(() => import("../../common/Container"));

// const useStyles = makeStyles((theme, id) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
// export default function FullWidthGrid() {
//   const classes = useStyles();
//   return (
//       <div className="section group">
//         <div className="col span_1_of_2">
//             <div className={classes.root}>
//               <Grid container spacing={3}>
//             <Grid item xs={12} sm={12}>
              
//                     {/* <ul>
//                       <li>
//                         <Link to="/">Home</Link>
//                       </li>
//                       <li>
//                         <Link to="/First">First</Link>
//                       </li> */}
//                       {/* <li>
//                         <Link to="/services">Services</Link>
//                       </li>
//                       <li>
//                         <Link to="/Contact">Contact</Link>
//                       </li> */}
//               {/* </ul> */}
//                <Container >
//                 <section className='toggle'>
//                   <label htmlFor="toggle">
//         <input type="checkbox" id="toggle" />
        
//         <div className="switch">
//           <span className="knob" />
//           <span className="moon" />
//           <span className="sun" />
//         </div>
//         <div className="overlay" />
//                   </label>
//                   </section>
//                   </Container>
//                   </Grid>
//           </Grid>
          
//           </div>
//         </div>
//       </div>
        
//     );
// }