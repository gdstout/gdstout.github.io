import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up("md")]: {
      padding: "70px 65px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 40px",
    },
  },
  link: {
    color: "grey",
    "&:hover": {
      color: "#165916",
    },
  },
}));

const Home = () => {
  const styles = useStyles();

  let content = (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.gridContainer}
      >
        <Grid item>
          <Typography variant="h3">Concerning This Site...</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            This is a React application built from scratch with JavaScript and Material
            UI inspired by{" "}
            <a
              href="https://mldangelo.com/"
              target="_blank"
              className={styles.link}
            >
              Michael D'Angelo's
            </a>{" "}
            implementation of{" "}
            <a
              href="https://html5up.net/future-imperfect"
              target="_blank"
              className={styles.link}
            >
              Future Imperfect
            </a>
            .{" "}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.gridContainer}
      >
        <Grid item>
          <Typography variant="body1">
            Welcome to my personal website! Here are some things you can do
            here:
            </Typography>
            <ul>
              <li><Typography><Link to="/about" className={styles.link}>Learn more about me</Link></Typography></li>
              <li><Typography><Link to="/resume" className={styles.link}>Review my most up-to-date resume</Link></Typography></li>
              <li><Typography><Link to="/contact" className={styles.link}>Contact me</Link></Typography></li>
            </ul>
        </Grid>
      </Grid>
    </div>
  );
  return content;
};

export default Home;
