import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from '.';

const RootRouter: React.SFC<{}> = () => (
  <Router>
    <Switch>
      <Route exact path={'/'}  component={Index}/>
      <Route path={'/blogs'} render={() => <Redirect to={'/'}/>} />
      <Route path={'/showcase'} render={() => <Redirect to={'/'}/>} />
    </Switch>
  </Router>
);

export default RootRouter;
