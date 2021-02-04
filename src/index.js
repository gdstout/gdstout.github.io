import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans Condensed',
      'sans-serif',
    ].join(','),
  },});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

