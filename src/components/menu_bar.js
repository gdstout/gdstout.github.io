import React from "react";
import {
  AppBar,
  Divider,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  bigDivider: {
    marginLeft: "24px",
    marginRight: "24px",
  },
  smallDivider: {
    marginLeft: "18px",
    marginRight: "18px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  link: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: '#202020'
    }
  },
}));

const MenuBar = () => {
  const styles = useStyles();

  let content = (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">GRIFFIN D. STOUT</Typography>
        <Divider
          orientation="vertical"
          flexItem
          className={styles.bigDivider}
        />
        <Link to="/" className={styles.link} color="inherit">
          <Typography variant="body1">HOME</Typography>
        </Link>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          className={styles.smallDivider}
        />
        <Link to="/about" className={styles.link}>
          <Typography variant="body1">ABOUT</Typography>
        </Link>
        <Divider
          orientation="vertical"
          flexItem
          className={styles.smallDivider}
        />
        <Link to="/resume" className={styles.link} color="inherit">
          <Typography variant="body1">RESUME</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
  return content;
};

export default MenuBar;
