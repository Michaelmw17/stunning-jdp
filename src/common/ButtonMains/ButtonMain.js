import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
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
            marginRight:  " auto",
            width: "50%",
      marginLeft: "90px",
            
        }
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return ( 
      <div className={classes.root}>
          <div id="example1">
              {/* <label> */}
                  {/* <input type="checkbox" name=""></input> */}
              <span variant="notOutlined" color="primary" href="/" style={{
                  "position": "absolute", "top": "0", "left": "0", "display": "block",
                  "width": "55%", "height": "60%", "background": "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(211,211,211,1) 100%)", "borderRadius": "20%", "boxShadow": "0 0 50px #D3D3D3,\n    inset 0 0 50px rgba(255,255,255),\n    inset 0 1px 1px #71d9ff,\n    0 0 0 1px #D3D3D3,\n    0 0 0 3px #707070,\n    0 0 0 5px #D3D3D3",

          }}>
            <span style={{
                  "position": "absolute", "top": "0", "left": "0", "display": "block",
              "width": "40%", "height": "10%", "background": "#D3D3D3", "borderRadius": "20%", "boxShadow": "0 0 50px #71d9ff,\n    inset 0 0 50px #71d9ff,\n    inset 0 1px 1px #000,\n    0 0 0 1px #000,\n    0 0 0 1px #000,\n    0 0  1px #000", marginLeft: "22px",
                  marginTop: "20px"

          }}>

            </span>
        </span>
      {/* </label> */}
    
  </div>
    </div>
  );
}