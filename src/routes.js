import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/App';

const Test = () => <div>Test</div>;

export default (
  <Route path="/" >
    <IndexRoute component={App} />
    <Route path="/test" component={Test} />
  </Route>
);
