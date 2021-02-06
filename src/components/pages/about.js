import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
} from "@material-ui/core";
import AccordianDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.up("md")]: {
      padding: "70px 65px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "45px 30px",
    },
  },
  sectionHead: {
    margin: "auto",
    fontWeight: 200,
    fontSize: 36,
  },
}));

const About = () => {
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
          <Typography variant="h3">About Me</Typography>
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
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.sectionHead}>PAST</Typography>
              </AccordionSummary>
              <AccordianDetails>
                <Typography>This section will be about my accomplishments, anything interesting I've done, etc.</Typography>
              </AccordianDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.sectionHead}>PRESENT</Typography>
              </AccordionSummary>
              <AccordianDetails>
                <Typography>This section will be about what I'm currently doing, probably pretty short (cap 1, etc)</Typography>
              </AccordianDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.sectionHead}>FUTURE</Typography>
              </AccordionSummary>
              <AccordianDetails>
                <Typography>This section will be about my future goals for personal and career, and will include a bucket list.</Typography>
              </AccordianDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  return content;
};

export default About;
