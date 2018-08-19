import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RootRouter from './pages/root-router';
import { MuiThemeProvider, CssBaseline, createMuiTheme, Color } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';

const primary: Color = purple;
const secondary: Color = green;

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
  },
});

const ThemeProvider: React.SFC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <RootRouter/>
  </MuiThemeProvider>
);

ReactDOM.render(<ThemeProvider/>, document.querySelector('#root'));
