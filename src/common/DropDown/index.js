
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 290,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          What can we help you with?: 
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="menu"
          name="menu"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"None"}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Residential"}>Residential</MenuItem>
          <MenuItem value={"Strata / Property Maintenance "}>Strata / Property Maintenance </MenuItem>
          <MenuItem value={"Commercial"}>Commercial</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      
    </div>
  );
}