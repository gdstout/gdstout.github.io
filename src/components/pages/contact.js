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

const Contact = () => {
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
          <Typography variant="h3">Contact Me</Typography>
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
            Email me at{" "}
            <a href="mailto: griffindstout@gmail.com" className={styles.link}>
              griffindstout@gmail.com
            </a>{" "}
            or visit my{" "}
            <a
              href="https://www.linkedin.com/in/griffin-stout-a9914792/"
              className={styles.link}
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="https://github.com/gdstout" className={styles.link}>
              GitHub
            </a>
            .
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
  return content;
};

export default Contact;
