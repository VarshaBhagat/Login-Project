const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  hide: {
    height: 0,
  },
  logoIcon: {
    height: "60px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  logoutIcon: {
    position: "fixed",
    bottom: "5%",
    left: "0",
    width: "inherit",
    cursor: "pointer",
  },
});

export default styles;
