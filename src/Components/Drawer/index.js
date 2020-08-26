import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { withStyles, useTheme } from "@material-ui/core/styles";
import styles from "./styles";

const CustomisedDrawer = ({ classes, children }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem
          button
          key={"logo"}
          onClick={() => (window.location.href = `/page/${"home"}`)}
          className={classes.logoIcon}
        >
          <ListItemIcon>
            <img
              src={window && window.location.origin + `/image/${"home"}.png`}
              alt={"logo"}
            />
          </ListItemIcon>
        </ListItem>

        {["home", "profile", "posts"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => (window.location.href = `/page/${text}`)}
          >
            <ListItemIcon>
              <img
                src={window && window.location.origin + `/image/${text}.png`}
                alt={text}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem
          button
          key={"logout"}
          onClick={() => (window.location.href = `/${"login"}`)}
          className={classes.logoutIcon}
        >
          <ListItemIcon>
            <img
              src={window && window.location.origin + `/image/${"logout"}.png`}
              alt={"logo"}
            />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Hidden smUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.hide}>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

CustomisedDrawer.propTypes = {
  children: PropTypes.node,
};

export default withStyles(styles)(CustomisedDrawer);
