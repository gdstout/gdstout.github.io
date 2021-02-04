import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import MenuBar from "./menu_bar";
import ProfileBar from "./profile_bar";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";

const App = () => {
  let content = (
    <div>
      <MenuBar />
      <Container maxWidth="lg">
        <ProfileBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Container>
    </div>
  );
  return content;
};

export default App;
