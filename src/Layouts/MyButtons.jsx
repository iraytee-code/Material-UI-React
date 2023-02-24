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
          <Buttons variant="contained" title="Default" />
          <Buttons variant="contained" color="primary" title="Primary" />
          <Buttons variant="contained" color="secondary" title="Secondary" />
          <Buttons variant="contained" disabled={true} title="Disabled" />
          <Buttons
            variant="contained"
            color="primary"
            linkTitle="#contained-buttons"
            title="Link"
          />
          <Buttons variant="outlined" color="primary" title="Outlined" />
        </StackComponent>
        <Stack></Stack>
      </BoxComponent>
    </Fragment>
  );
};

export default MyButtons;
