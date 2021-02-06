import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import MenuBar from "./menu_bar";
import ProfileBar from "./profile_bar";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '80px'
  },
}));

const App = () => {
  const styles = useStyles();

  let content = (
    <div>
      <MenuBar />
      <Container maxWidth="lg" className={styles.container}>
        <Grid container spacing={4} direction="row-reverse">
          <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
            <Paper >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
            </Switch>
            </Paper>
          </Grid>
          <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
            <ProfileBar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
  return content;
};

export default App;
