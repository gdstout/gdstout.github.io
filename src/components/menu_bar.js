import { React, useState } from "react";
import {
  AppBar,
  Divider,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
      color: "#165916",
    },
  },
  link: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: "#165916",
    },
  },
  titleWhenSmall: {
    flexGrow: 1
  }
}));

const MenuBar = () => {
  const styles = useStyles();
  const theme = useTheme();

  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  let content = (
    <AppBar position="static">
      {useMediaQuery(theme.breakpoints.up("md")) ? (
        <Toolbar>
          <Typography variant="h5">
            <Link to="/" className={styles.titleLink}>
              GRIFFIN D. STOUT
            </Link>
          </Typography>
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
          <Divider
            orientation="vertical"
            flexItem
            className={styles.smallDivider}
          />
          <Link to="/contact" className={styles.link} color="inherit">
            <Typography variant="body1">CONTACT</Typography>
          </Link>
        </Toolbar>
      ) : (
        <Toolbar>
          <Typography variant="h5" className={styles.titleWhenSmall}>
            <Link to="/" className={styles.titleLink}>
              GRIFFIN D. STOUT
            </Link>
          </Typography>

          <div>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
            >
              <Link to="/about" className={styles.link}>
                <MenuItem onClick={handleClose}>
                  <Typography variant="body1">ABOUT</Typography>
                </MenuItem>
              </Link>
              <Link to="/resume" className={styles.link} color="inherit">
                <MenuItem onClick={handleClose}>
                  <Typography variant="body1">RESUME</Typography>
                </MenuItem>
              </Link>
              <Link to="/contact" className={styles.link} color="inherit">
                <MenuItem onClick={handleClose}>
                  <Typography variant="body1">CONTACT</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      )}
    </AppBar>
  );
  return content;
};

export default MenuBar;
