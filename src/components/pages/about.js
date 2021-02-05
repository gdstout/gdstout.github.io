import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  test: {
    height: "500px",
  },
}));

const About = () => {
  const styles = makeStyles();

  let content = (
    <Paper fullWidth className={styles.test}>
      <div className={styles.test}> Hello<br/>Hello<br/>Hello<br/>Hello<br/>Hello<br/>Hello<br/></div>
    </Paper>
  );
  return content;
};

export default About;
