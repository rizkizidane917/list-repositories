import React from 'react';
import Users from '../component/Users';
import { Route, Switch } from 'react-router-dom';
import UserItem from '../component/UserItem';

const LandingPage = () => {
  return (
    <Route>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/:login' exact>
          <UserItem />
        </Route>
      </Switch>
    </Route>
  );
};
export default LandingPage;
