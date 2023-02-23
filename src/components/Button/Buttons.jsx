import React, { Fragment } from "react";
import Button from "@mui/material/Button";

const Buttons = ({ variant, title, disabled, elevation, color }) => {
  return (
    <Fragment>
      <Button
        variant={variant}
        disabled={disabled}
        disableElevation={elevation}
        color={color}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default Buttons;
