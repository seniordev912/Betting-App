import React, { useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Minimal as MinimalLayout } from './layouts';

import {
  Games as GamesView,
  Matches as MatchesView,
  Match as MatchView,
  BetCreate as BetCreateView,
  BetList as BetListView,
  NotFound as NotFoundView,
} from './views';

const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/games"/>
      <RouteWithLayout
        component={GamesView}
        exact
        layout={MinimalLayout}
        path="/games"
      />
      <RouteWithLayout
        component={MatchesView}
        exact
        layout={MinimalLayout}
        path="/games/:id"
      />
      <RouteWithLayout
        component={MatchView}
        exact
        layout={MinimalLayout}
        path="/matches/:id"
      />
      <RouteWithLayout
        component={BetCreateView}
        exact
        layout={MinimalLayout}
        path="/create_bet/:id"
      />
      <RouteWithLayout
        component={BetListView}
        exact
        layout={MinimalLayout}
        path="/bet_list/:id"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
		
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
