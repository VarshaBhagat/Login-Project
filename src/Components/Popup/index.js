import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Button, Dialog, IconButton, Typography } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./styles";

const DialogTitle = ({ children, classes, onClose }) => {
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const CustomizedDialogs = ({
  classes,
  CTAText,
  title,
  children,
  actionCTA,
  primary,
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        variant="body2"
        onClick={handleClickOpen}
        className={primary && classes.primary}
      >
        {actionCTA}
      </Typography>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose} classes={classes}>
          {title}
        </DialogTitle>
        <MuiDialogContent dividers>{children}</MuiDialogContent>
        {CTAText && (
          <MuiDialogActions>
            <Button onClick={handleClose} color="primary">
              {CTAText}
            </Button>
          </MuiDialogActions>
        )}
      </Dialog>
    </>
  );
};

CustomizedDialogs.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  CTAText: PropTypes.string,
  title: PropTypes.string,
  actionCTA: PropTypes.string,
  primary: PropTypes.bool,
};

export default withStyles(styles)(CustomizedDialogs);
