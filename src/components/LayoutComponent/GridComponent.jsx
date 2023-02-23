import React, { Fragment } from "react";
import { Grid } from "@mui/material";

const GridComponent = ({
  children,
  spacingXs,
  container,
  spacingMd,
  margin,
  columnMd,
  columnSm,
  columnXs,
}) => {
  return (
    <Fragment>
      <Grid
        container={container}
        sx={{
          margin: margin,
        }}
        spacing={{ xs: spacingXs, md: spacingMd }}
        columns={{ xs: columnXs, sm: columnSm, md: columnMd }}
      >
        {children}
      </Grid>
    </Fragment>
  );
};

export default GridComponent;
