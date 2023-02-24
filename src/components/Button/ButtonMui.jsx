import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(4, 0, 4, 0),
  },
}));

const ButtonMui = ({ title, type, fullWidth, variant, color }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button
        type={type}
        fullWidth={fullWidth}
        variant={variant}
        color={color}
        className={classes.submit}
        style={{ outline: "none" }}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default ButtonMui;
