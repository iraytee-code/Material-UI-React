import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import Buttons from "../components/Button/Buttons";
import BoxComponent from "../components/Box/BoxComponent";
import StackComponent from "../components/LayoutComponent/StackComponent";

const MyButtons = () => {
  return (
    <Fragment>
      <BoxComponent>
        <Typography variant="h6" component="h4">
          Buttons
        </Typography>
        <StackComponent
          spacingXs={3}
          directionXs="column"
          px={3}
          bgColor="#edf6f9"
        >
          <Buttons variant="contained" title="contained Variant" />
          <Buttons variant="outlined" title="outlined Variant" />
          <Buttons variant="outlined" title="disabled Variant" disabled />
          <Buttons
            variant="contained"
            title="disabled Elevation"
            elevation={true}
          />
          <Buttons
            variant="contained"
            title="enabled Elevation"
            elevation={false}
          />
          <Buttons variant="contained" title="Success" color="success" />
          <Buttons variant="contained" title="Error" color="error" />
        </StackComponent>
        <Stack></Stack>
      </BoxComponent>
    </Fragment>
  );
};

export default MyButtons;
