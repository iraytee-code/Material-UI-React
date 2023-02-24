/** @format */

import React, { useState } from "react";
import { TextField, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonMui from "../components/Button/ButtonMui";
import CustomizedInput from "../components/FormFields/TextFieldMui";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
    outline: "solid",
    outlineColor: "#",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate>
          <CustomizedInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <CustomizedInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <ButtonMui
            title="Sign In"
            type="submit"
            fullWidth={true}
            variant="contained"
            color="primary"
          />
        </form>
      </div>
    </Container>
  );
};

export default Login;
