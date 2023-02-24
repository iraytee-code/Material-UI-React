import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({ variant, title, disabled, elevation, color, linkTitle }) => {
  return (
    <Fragment>
      <Button
        variant={variant}
        disabled={disabled}
        disableElevation={elevation}
        color={color}
        href={linkTitle}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default Buttons;
