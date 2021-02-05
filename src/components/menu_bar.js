import React from "react";
import {
  AppBar,
  Divider,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bigDivider: {
    marginLeft: "24px",
    marginRight: "24px",
  },
  smallDivider: {
    marginLeft: "18px",
    marginRight: "18px",
    marginTop: "18px",
    marginBottom: "18px",
  },
  titleLink: {
    textDecoration: "none",
    color: "#202020",
    "&:hover": {
      color: '#165916'
    }
  },
  link: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: '#165916'
    }
  },
}));

const MenuBar = () => {
  const styles = useStyles();

  let content = (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5"><Link to="/" className={styles.titleLink}>GRIFFIN D. STOUT</Link></Typography>
        <Divider
          orientation="vertical"
          flexItem
          className={styles.bigDivider}
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
