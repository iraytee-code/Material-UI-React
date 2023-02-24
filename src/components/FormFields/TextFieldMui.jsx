/** @format */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "default",
    },
    "& .MuiInput:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "default",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },

      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField);

export default function CustomizedInput({
  id,
  required,
  label,
  variant,
  fullWidth,
  onChange,
  value,
  ...rest
}) {
  const classes = withStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        label={label}
        variant={variant}
        id={id}
        fullWidth={fullWidth}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </form>
  );
}
