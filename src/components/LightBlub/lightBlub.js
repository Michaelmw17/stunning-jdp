import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../globalStyles'
import $ from 'jquery';
// import MyButton from '../MyButton/index'

const useStyles = makeStyles((theme, id) => ({
    
  root: {
    flexGrow: 1,
  },
}));



export default function FullWidthGrid() {
  const classes = useStyles();
$(function(){
  $(".enter-btn").click(function(){
    $("body").toggleClass(" active");
  });  
});

 
  return (
      <div className="section group">
	<div className="col span_1_of_2">
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                <div className="container">
                <div className="fancy-bulb">
                  <div className="left-streaks streaks" />
                  <div className="enter-btn" >
                    {/* <MyButton /> */}
                  </div>
                      <div className="right-streaks streaks" />
                    </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      <div className="col span_1_of_2">
        
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