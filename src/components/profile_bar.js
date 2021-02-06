import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ProfilePic from "../images/griffin_colorado.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("lg")]: {
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  copyright: {
    color: 'grey'
  },
  typography: {
    [theme.breakpoints.up("lg")]: {
      textAlign: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }
}));

const ProfileBar = () => {
  const styles = useStyles();

  let content = (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.container}
      >
        <Grid item>
          <Link to="/">
            <img src={ProfilePic} width="190px" alt="Profile" />
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h3">Griffin D. Stout</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={styles.typography}>
            Hi! I'm Griffin. My occupation is Software Engineering. I graduated
            from Iowa State University in 2020, and now live in Arlington, VA,
            where I work for Capital One.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={styles.typography}>
            Please look around my website if you want to learn more about me,
            what I've done, and what I want to do.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to={"/about"}
          >
            <Typography variant="button">Learn More</Typography>
          </Button>
        </Grid>
      </Grid>
      <Divider className={styles.divider} />
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.container}
      >
        <Grid item><Typography variant="body2" className={styles.copyright}>© 2021 Griffin D. Stout</Typography></Grid>
      </Grid>
    </div>
  );

  return content;
};

export default ProfileBar;
