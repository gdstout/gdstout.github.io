import {
  Accordion,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccordianDetails from "@material-ui/core/AccordionDetails";
import React from "react";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
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
  link: {
    textDecoration: "none",
    color: "grey",
    "&:hover": {
      color: "#165916",
    },
  },
  sectionHead: {
    margin: "auto",
    fontWeight: 200,
    fontSize: 36,
  },
}));

const Resume = () => {
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
          <Typography variant="h3">Interactive Resume</Typography>
        </Grid>

        <Grid item>
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            startIcon={<GetAppIcon />}
          >
            Professional Resume
          </Button>
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
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.sectionHead}>EDUCATION</Typography>
            </AccordionSummary>
            <AccordianDetails>
              <Typography>Paragraph</Typography>
            </AccordianDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.sectionHead}>EXPERIENCE</Typography>
            </AccordionSummary>
            <AccordianDetails>
              <Typography>Paragraph</Typography>
            </AccordianDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.sectionHead}>SKILLS</Typography>
            </AccordionSummary>
            <AccordianDetails>
              <Typography>Paragraph</Typography>
            </AccordianDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.sectionHead}>
                LEADERSHIP AND SERVICE
              </Typography>
            </AccordionSummary>
            <AccordianDetails>
              <Typography>Paragraph</Typography>
            </AccordianDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.sectionHead}>REFERENCES</Typography>
            </AccordionSummary>
            <AccordianDetails>
              <Typography>Paragraph</Typography>
            </AccordianDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
  return content;
};

export default Resume;
