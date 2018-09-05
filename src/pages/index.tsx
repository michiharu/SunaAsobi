import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import { Grid } from '@material-ui/core';

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

type State = {
  open: boolean;
};

const Index = withStyles(styles)(
  class extends React.Component<WithStyles<'root'>, State> {
    state = {
      open: false,
    };
  
    handleClose = () => {
      this.setState({
        open: false,
      });
    };
  
    handleClick = () => {
      this.setState({
        open: true,
      });
    };
  
    render() {
      return (
        <div className={this.props.classes.root}>
          <div>
            <Typography variant="display1" gutterBottom>
              Suna-Asobi
            </Typography>
            <Typography variant="subheading" gutterBottom>
              example project
            </Typography>
          </div>
          <div>
            <Grid container>
              <Grid item>コンテンツ</Grid>
            </Grid>
          </div>
        </div>
      );
    }
  }
);

export default Index;
