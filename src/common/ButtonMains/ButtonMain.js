import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './button.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: "relative",
      height: "110px",
      cursor: "pointer",
      borderRadius: "20%",
      marginTop: "150px",
      display: "block",
      marginRight: " auto",
      width: "50%",
      marginLeft: "90px",
    },
    //       '&:hover': {
    //    background:"linear-gradient(90deg, #add8e6  0%, #add8e6 50%, #add8e6 100%)",
            
    // },
    
  },
}));


 export default  function OutlinedButtons() {
  const classes = useStyles();
 
  return ( 
    <div className={classes.root}>
      
      <div id="example1">
      <div id="example11">
     
        <Button
          title="Click to Enter"
          variant="outlined"
          color="primary"
          id="MainButton"
          style={{"position": "absolute",
            "top": "0", "left": "0",
            "display": "block",
            "width": "150%",
            "height": "60%",
            "borderRadius": "20%",
            
            "boxShadow":
              "0 0 50px #94ffff,\n    inset 0 0 50px rgba(255,255,255),    inset 0 1px 1px #71d9ff,\n    0 0 0 1px #D3D3D3,\n    0 0 0 2px #707070,\n    0 0 0 3px #D3D3D3",
              "background": "linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white"
              
          }}>
          
          <span style={{"position": "absolute",
          
            "top": "0", "left": "0",
            "display": "block",
            "width": "45%",
            "height": "10%",
            "background": "#66ffff",
            "borderRadius": "20%",
            "boxShadow": "0 0 50px #71d9ff,\n    inset 0 0 50px #71d9ff,\n    inset 0 1px 1px #000,\n    0 0 0 1px #000,\n    0 0 0 1px #000,\n    0 0  1px #000",
            "marginLeft": "13px",
            "marginTop": "20px",
          }}>
            </span>
        </Button>
      </div>
      </div>
    </div>
  );
}
