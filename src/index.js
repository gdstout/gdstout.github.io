import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/app";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1550,
  xl: 1920,
};

const breakpointsFull = {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS
  }),
};

const myTheme = {
  typography: {
    fontFamily: ["IBM Plex Sans Condensed", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#165916",
    },
  },
};

const theme = createMuiTheme(myTheme, breakpointsFull);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
