import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/helpers/AsyncComponent';
import Loadable from 'react-loadable';
import AppliedRoute from './components/helpers/AppliedRoute';

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

const AsyncHome = Loadable({
  loader: () =>
    import('./components/Search/components/AutoCompleteExampleFilters'),
  loading: MyLoadingComponent
});
const AsyncNotFound = asyncComponent(() =>
  import('./components/modules/NotFound')
);

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={AsyncHome} />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);
