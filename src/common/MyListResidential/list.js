import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import './RStyle.css'

const words = ['Maintenance and repairs', ' Renovations and new builds', 'Cbus home automation',' Home security lighting', 'Garden lighting','  General power outlets','Lighting control systems', 'Main switchboard','Upgrades, safety switches and circuit breakers', 'Lights and power points ', 'Smoke detectors',  'Appliance installations and repairs ', 'Fan installations', 'Data / Phone / Tv communications', 'Security',' Complete rewiring', ];

const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgb(209, 29, 50)',
    position: 'relative',
    maxHeight: 300,
    color: '#FFF'
  },
  listSection: {
    backgroundColor: 'rgb(209, 29, 50)',
  },
  ul: {
    backgroundColor: 'rgb(209, 29, 50)',
    padding: 0,

    paddingRight: 50,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
    
          <ul className={classes.ul}>
              <ul className='list-unstyled'>
              {items} 
              </ul>
          </ul>
      
    </List>
  );
}