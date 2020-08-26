import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Login = ({ classes }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordSuccess, setPasswordSuccess] = useState(true);
  const [isEmailSuccess, setEmailSuccess] = useState(true);

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailSuccess(/./.test(value) && /@/.test(value));
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordSuccess(/[0-9]/.test(value) && /[A-Z]/.test(value));
  };

  const onSubmit = () => {
    if (password && email) {
      return (window.location.href = `/page/${"home"}`);
    } else if (!password && !email) {
      setPasswordSuccess(false);
      setEmailSuccess(false);
    } else if (!email) {
      setEmailSuccess(false);
    } else if (!password) {
      setPasswordSuccess(false);
    }
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.loginContainer}
      >
        <div className={classes.loginContent}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form action="/page/home">
            <Grid container direction="column" alignItems="center">
              <TextField
                id="emaild"
                label="Email Id"
                variant="outlined"
                className={classes.inputBox}
                required
                onChange={(e) => onChangeEmail(e)}
                error={!isEmailSuccess}
              />
              <TextField
                id="password"
                label="password"
                variant="outlined"
                className={classes.inputBox}
                error={!isPasswordSuccess}
                required
                onChange={(e) => onChangePassword(e)}
              />
              <Grid item xs={4}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth={false}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Login);
