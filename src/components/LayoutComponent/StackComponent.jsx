import React, { Fragment } from "react";
import { Stack } from "@mui/system";

const StackComponent = ({
  children,
  directionXs,
  directionSm,
  spacingMd,
  spacingSm,
  spacingXs,
  bgColor,
  px,
}) => {
  return (
    <Fragment>
      <Stack
        //direction defines the flex direction style
        direction={{ xs: directionXs, sm: directionSm }}
        // spacing defines the  immediate spacing children.
        spacing={{ xs: spacingXs, sm: spacingSm, md: spacingMd }}
        //sx is used to overide default
        sx={{
          background: bgColor,
          padding: px,
          //all overidden styles can be used here
        }}
      >
        {children}
      </Stack>
    </Fragment>
  );
};

export default StackComponent;
