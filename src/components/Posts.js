import React from 'react';
import Header from 'components/Header';
import Articles from 'components/Articles';
import Paginator from 'components/Paginator';

export default () =>
  <div>
    <Header />
    <Paginator />
    <Articles />
    <Paginator />
  </div>;
