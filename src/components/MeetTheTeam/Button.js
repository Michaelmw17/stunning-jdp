import React, { Component } from "react";
import injectSheet from "react-jss";

class Button extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>A Button</div>;
  }
}

const styles = {
  root: {
    display: "block",
    background: "red",
    color: "yellow"
  }
};

export default injectSheet(styles)(Button);
