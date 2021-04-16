import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
            marginRight:  " auto",
            width: "50%",
            marginLeft: "80px",
        }
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (  <div id='Contained'>
      <div className={classes.root}>
          <div id="example1">
              <label>
                  <input type="checkbox" name=""></input>
              <button variant="outlined" color="primary" href="/" style={{
                  "position": "absolute", "top": "0", "left": "0", "display": "block",
                  "width": "70%", "height": "60%", "background": "#FFF", "borderRadius": "20%", "boxShadow": "0 0 50px #71d9ff,\n    inset 0 0 50px rgba(255,255,255),\n    inset 0 1px 1px #71d9ff,\n    0 0 0 2px #71d9ff,\n    0 0 0 5px #71d9ff,\n    0 0 0 5px #71d9ff"
              }}>
      </button></label></div></div>
    </div>
  );
}