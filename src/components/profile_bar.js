import { Divider, Grid, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import ProfilePic from "../images/griffin_colorado.png";

const useStyles = makeStyles((theme) => ({
  emailLink: {
    color: "#000000",
    "&:hover": {
      color: "#165916",
    },
  },
  email: {
    fontWeight: 200,
    fontSize: 26
  }
}));

const ProfileBar = () => {
  const styles = useStyles();

  let content = (
    <div>
      <Grid container spacing={2} direction="column" alignItems="flex-start">
        <Grid item>
          <img src={ProfilePic} width="190px" alt="Profile" />
        </Grid>
        <Grid item>
          <Typography variant="h3">Griffin D. Stout</Typography>
        </Grid>
        <Grid item>
          <Link
            href="mailto: griffindstout@gmail.com"
            className={styles.emailLink}
          >
            <Typography className={styles.email}>griffindstout@gmail.com</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Divider flexItem orientation="horizontal"/>
        </Grid>
      </Grid>
    </div>
  );

  return content;
};

export default ProfileBar;
