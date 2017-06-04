import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from 'components/App';
import Posts from 'components/Posts';

export default (
  <Route path="/" component={App} >
    <IndexRedirect to="posts" />
    <Route path="posts" component={Posts} />
  </Route>
);
