import React, { Fragment } from "react";
import { Box } from "@mui/system";

const BoxComponent = ({ children }) => {
  return (
    <Fragment>
      <Box>{children}</Box>
    </Fragment>
  );
};

export default BoxComponent;
