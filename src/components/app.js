import React from "react";
import { Container} from "@material-ui/core";
import MenuBar from './menu_bar';
import ProfileBar from './profile_bar';


const App = () => {
  let content = (
    <div>
      <MenuBar/>
      <Container maxWidth="lg">
        <ProfileBar/>
      </Container>
    </div>
  );
  return content;
};

export default App;
