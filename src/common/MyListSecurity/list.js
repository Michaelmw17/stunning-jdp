import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import './RStyle.css'

const words = ['All security/CCTV solution installations to ensure you will be made to feel secure in your home ', ];
const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#EAB642',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    color: '#FFF'
  },
  listSection: {
    backgroundColor: '#EAB642',
  },
  ul: {
    backgroundColor: '#EAB642',
    padding: 0,

    paddingRight: 20,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
    <p style={{ fontSize: 20,color: '#FFF', textTransform: 'uppercase'}}>Security</p>
          <ul className={classes.ul}>
              <ul className='list-unstyled'>
              {items} 
              </ul>
          </ul>
      
    </List>
  );
}