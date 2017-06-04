import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from 'components/App';
import Posts from 'components/Posts';
import Web from 'components/Web';

export default (
  <Route path="/" component={App} >
    <IndexRedirect to="posts" />
    <Route path="posts" component={Posts} />
    <Route path="posts/:index" component={Web} />
  </Route>
);
