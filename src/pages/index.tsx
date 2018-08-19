import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles';

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
          <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle>My first example!</DialogTitle>
            <DialogContent>
              <DialogContentText>Dialog</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="display1" gutterBottom>
            Suna-Asobi
          </Typography>
          <Typography variant="subheading" gutterBottom>
            example project
          </Typography>
          <Button variant="raised" color="secondary" onClick={this.handleClick}>
            start
          </Button>
        </div>
      );
    }
  }
);

export default Index;