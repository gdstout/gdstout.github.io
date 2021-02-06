import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  test: {
    height: "500px",
  },
}));

const About = () => {
  const styles = makeStyles();

  let content = (
    <div>
      <Typography variant="h3">About Me</Typography>
    </div>
  );
  return content;
};

export default About;
